// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Lend is ChainlinkClient, ERC20("AGROFINANCE", "AGR") {
    using SafeERC20 for IERC20;

    Stake public stakeContract;

    uint256 public constant MIN_VOTES = 1;
    uint256 public constant EARNING_RATE = 125; // 1.25% (to avoid float operations)
    uint256 public constant STAKER_INTEREST_SHARE = 30; // 30% of interest goes to stakers
    uint256 public constant INTEREST_DENOMINATOR = 100;

    address public governance;
    uint256 public FEES_NUMERATOR = 30; // 3% protocol fees on withdraw
    uint256 public FEES_DENOMINATOR = 1000;

    mapping(address => mapping(address => uint256)) public lendingBalance;
    mapping(address => uint256) public uniqueTokensLent;
    mapping(address => address) public tokenPriceFeedMapping;
    mapping(address => uint256) public lenderEarnings;
    address[] public allowedTokens;
    address[] public lenders;
    mapping(address => uint16) public tokenMultiplier;
    mapping(address => uint256) public borrowerCreditScores;

    event Lent(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount, uint256 fees);
    event CreditScoreUpdated(address indexed borrower, uint256 creditScore);

    mapping(address => bool) public auth;

    struct Loan {
        address token;
        uint256 principal;
        uint256 rateInBasisPoints;
        uint256 totalAmount;
        uint256 endTimestamp;
        uint256 currentVoteCount;
        uint256 totalVotesRequired;
        uint256 totalAmountVoted;
        address borrower;
        bool active;
        bool repaid;
        bool approved;
        string ipfsHash;
    }

    event newLoanRequest(uint256 indexed loanId);
    event loanApproved(uint256 indexed loanId);
    event loanRepaid(uint256 indexed loanId);
    event loanLiquidated(uint256 indexed loanId);

    mapping(uint256 => Loan) public loans;
    uint256 public loanId;

    // staker => loanId => voted ratio
    mapping(address => mapping(uint256 => uint256)) public votes;
    mapping(uint256 => address[]) public voters;

     constructor(address _stakeContractAddress) {
        governance = msg.sender;
        auth[msg.sender] = true;
        _mint(address(this), 1e28);

        stakeContract = Stake(_stakeContractAddress); // Initialize stake contract
    }

    constructor() {
        governance = msg.sender;
        auth[msg.sender] = true;
        _mint(address(this), 1e28);
    }

    modifier onlyAuth() {
        require(auth[msg.sender], "lend: not allowed");
        _;
    }
    modifier onlyGovernance() {
        require(msg.sender == governance, "lend: not allowed, only governance");
        _;
    }

    function updateAuth(address _who, bool _toggle) external onlyGovernance {
        auth[_who] = _toggle;
    }

    function addAllowedTokens(address token) public onlyGovernance {
        allowedTokens.push(token);
    }

    function updateMultiplier(
        address token,
        uint16 multiplier
    ) external onlyGovernance {
        tokenMultiplier[token] = multiplier;
    }

    function setPriceFeedContract(
        address token,
        address priceFeed
    ) public onlyGovernance {
        tokenPriceFeedMapping[token] = priceFeed;
    }

    function lendTokens(uint256 _amount, address _token) external {
        // important require checks
        require(_amount > 0, "lend: amount cannot be 0");
        require(tokenIsAllowed(_token), "lend: unauthorized token");

        // update storage variables
        updateUniqueTokensLent(msg.sender, _token);
        lendingBalance[_token][msg.sender] += _amount;

        emit Lent(msg.sender, _amount);
        // follow check effects interaction pattern
        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        // keep 1-1
        uint256 sharesToMint = getSharesToMint(_token, _amount);
        _mint(msg.sender, sharesToMint);

        // Calculate and update lender's earnings
        updateLenderEarnings(msg.sender, _token, _amount);
    }

    function getSharesToMint(
        address token,
        uint256 amount
    ) public view returns (uint256) {
        return (amount * uint256(tokenMultiplier[token])) / 1000;
    }

    function mintShares(
        address who,
        address token,
        uint256 amount
    ) external onlyAuth {
        _mint(who, getSharesToMint(token, amount));
        IERC20(token).transferFrom(who, address(this), amount);
    }

    function withdrawShares(address token, uint amount) external {
        require(balanceOf(msg.sender) >= amount, "lend: no outstanding shares");

        uint256 fees = processFeesAmount(amount);
        uint256 amountAfterFees = amount - fees;

        uint256 amountToBurn = getSharesToBurn(token, amount);
        _burn(msg.sender, amountToBurn);
        IERC20(token).transfer(msg.sender, amountAfterFees);
    }

    function getSharesToBurn(
        address token,
        uint256 amount
    ) public view returns (uint256) {
        return (amount * 1000) / uint256(tokenMultiplier[token]);
    }

    function burnShares(
        address who,
        address token,
        uint256 amount
    ) external onlyAuth {
        _burn(who, getSharesToMint(token, amount));
        IERC20(token).transfer(who, amount);
    }

    function withdrawTokens(uint256 _amount, address _token) public {
        // important require checks
        uint256 balance = lendingBalance[_token][msg.sender];
        require(balance > 0, "lend: lending balance cannot be 0");
        require(
            balance > _amount,
            "lend: withdrawal balance cannot be less than lending balance"
        );

        uint256 fees = processFeesAmount(_amount);
        uint256 amountAfterFees = _amount - fees;

        lendingBalance[_token][msg.sender] = balance - _amount;
        if (lendingBalance[_token][msg.sender] == 0) {
            uniqueTokensLent[msg.sender] = uniqueTokensLent[msg.sender] - 1;
        }

        emit Withdrawn(msg.sender, amountAfterFees, fees);
        // follow check effects interaction pattern
        IERC20(_token).safeTransfer(msg.sender, amountAfterFees);
        IERC20(_token).safeTransferFrom(msg.sender, governance, fees);
    }

    function processFeesAmount(
        uint256 _amount
    ) internal view returns (uint256) {
        return (FEES_NUMERATOR * _amount) / FEES_DENOMINATOR;
    }

    function getUserTokenValue(
        address user,
        address token
    ) public view returns (uint256) {
        return lendingBalance[token][user];
    }

    function getUserTotalValue(address user) public view returns (uint256) {
        uint256 totalValue = 0;
        if (uniqueTokensLent[user] > 0) {
            for (
                uint256 allowedTokensIndex = 0;
                allowedTokensIndex < allowedTokens.length;
                allowedTokensIndex++
            ) {
                totalValue =
                    totalValue +
                    getUserLendingBalanceEthValue(
                        user,
                        allowedTokens[allowedTokensIndex]
                    );
            }
        }
        return totalValue;
    }

    function tokenIsAllowed(address token) public view returns (bool) {
        for (
            uint256 allowedTokensIndex = 0;
            allowedTokensIndex < allowedTokens.length;
            allowedTokensIndex++
        ) {
            if (allowedTokens[allowedTokensIndex] == token) {
                return true;
            }
        }
        return false;
    }

    function updateUniqueTokensLent(address user, address token) internal {
        if (lendingBalance[token][user] <= 0) {
            uniqueTokensLent[user] = uniqueTokensLent[user] + 1;
        }
    }

    function getUserLendingBalanceEthValue(
        address user,
        address token
    ) public view returns (uint256) {
        if (uniqueTokensLent[user] <= 0) {
            return 0;
        }
        return
            (lendingBalance[token][user] * getTokenEthPrice(token)) /
            (10 ** 18);
    }

    function getTokenEthPrice(address token) public view returns (uint256) {
        address priceFeedAddress = tokenPriceFeedMapping[token];
        AggregatorV3Interface priceFeed = AggregatorV3Interface(
            priceFeedAddress
        );
        (, int256 price, , , ) = priceFeed.latestRoundData();
        return uint256(price);
    }

    function createBorrowRequest(
        address token,
        uint256 principal,
        uint256 rateInBasisPoints,
        uint256 totalAmount,
        uint256 endTimestamp,
        uint256 totalVotesRequired,
        address borrower,
        string memory ipfsHash
    ) external {
        require(
            msg.sender == borrower || auth[msg.sender],
            "lend: Not allowed"
        );
        require(principal > 0, "lend: principal cannot be 0");
        require(rateInBasisPoints > 0, "lend: rate cannot be 0");
        require(totalAmount > 0, "lend: total amount cannot be 0");
        require(endTimestamp > block.timestamp, "lend: Invalid end date");
        require(totalVotesRequired >= MIN_VOTES, "lend: Not enough votes");
        require(borrowerCreditScores[borrower] > 0, "lend: Invalid borrower");

        loans[++loanId] = Loan({
            token: token,
            principal: principal,
            rateInBasisPoints: rateInBasisPoints,
            totalAmount: totalAmount,
            endTimestamp: endTimestamp,
            currentVoteCount: 0,
            totalVotesRequired: totalVotesRequired,
            totalAmountVoted: 0,
            borrower: borrower,
            active: false,
            repaid: false,
            approved: false,
            ipfsHash: ipfsHash
        });

        emit newLoanRequest(loanId);
    }

    function voteForLoan(uint256 _loanId, uint256 _voteAmount) external {
        Loan storage _loan = loans[_loanId];
        require(
            _loan.endTimestamp > block.timestamp,
            "lend: Loan approval time ended"
        );
        require(!_loan.approved, "lend: Loan already approved");
        require(votes[msg.sender][_loanId] == 0, "lend: Already voted");
        require(_voteAmount > 0, "lend: Vote amount cannot be 0");
        require(_loan.active, "lend: Loan is not active");

        _loan.currentVoteCount++;
        _loan.totalAmountVoted += _voteAmount;
        votes[msg.sender][_loanId] = _voteAmount;
        voters[_loanId].push(msg.sender);

        if (_loan.currentVoteCount >= _loan.totalVotesRequired) {
            _loan.approved = true;
            emit loanApproved(_loanId);
        }
    }

    function fundApprovedLoan(uint256 _loanId) external onlyAuth {
        Loan storage _loan = loans[_loanId];
        require(_loan.approved, "lend: Loan is not approved");
        require(!_loan.repaid, "lend: Loan is already repaid");

        IERC20(_loan.token).safeTransfer(_loan.borrower, _loan.principal);
    }

    function repayLoan(uint256 _loanId) external {
        Loan storage _loan = loans[_loanId];
        require(_loan.approved, "lend: Loan is not approved");
        require(!_loan.repaid, "lend: Loan already repaid");
        require(
            msg.sender == _loan.borrower || auth[msg.sender],
            "lend: Not allowed"
        );

        _loan.repaid = true;
        uint256 repaymentAmount = _loan.totalAmount;
        IERC20(_loan.token).safeTransferFrom(
            _loan.borrower,
            address(this),
            repaymentAmount
        );
        emit loanRepaid(_loanId);
    }

    function liquidateLoan(uint256 _loanId) external onlyAuth {
        Loan storage _loan = loans[_loanId];
        require(_loan.approved, "lend: Loan is not approved");
        require(!_loan.repaid, "lend: Loan already repaid");

        uint256 repaymentAmount = _loan.totalAmount;
        _loan.repaid = true;
        IERC20(_loan.token).safeTransfer(governance, repaymentAmount);

        emit loanLiquidated(_loanId);
    }

    function updateCreditScore(
        address borrower,
        uint256 creditScore
    ) external onlyAuth {
        require(creditScore > 0, "lend: credit score cannot be 0");
        borrowerCreditScores[borrower] = creditScore;
        emit CreditScoreUpdated(borrower, creditScore);
    }

    function updateFees(
        uint256 numerator,
        uint256 denominator
    ) external onlyGovernance {
        require(numerator > 0, "lend: numerator cannot be 0");
        require(denominator > 0, "lend: denominator cannot be 0");

        FEES_NUMERATOR = numerator;
        FEES_DENOMINATOR = denominator;
    }

    function updateLenderEarnings(
        address lender,
        address token,
        uint256 amount
    ) internal {
        uint256 earnings = (amount * EARNING_RATE) / 10000;
        lenderEarnings[lender] += earnings;
    }

    function claimEarnings(address token) external {
        uint256 earnings = lenderEarnings[msg.sender];
        require(earnings > 0, "lend: No earnings to claim");

        lenderEarnings[msg.sender] = 0;
        IERC20(token).safeTransfer(msg.sender, earnings);
    }
    function repayLoan(uint256 _loanId) external {
        Loan storage _loan = loans[_loanId];
        require(_loan.approved, "lend: Loan is not approved");
        require(!_loan.repaid, "lend: Loan already repaid");
        require(
            msg.sender == _loan.borrower || auth[msg.sender],
            "lend: Not allowed"
        );

        _loan.repaid = true;
        uint256 repaymentAmount = _loan.totalAmount;

        // Calculate the interest paid
        uint256 interestPaid = repaymentAmount - _loan.principal;

        // Calculate 30% of the interest for stakers
        uint256 stakerShare = (interestPaid * STAKER_INTEREST_SHARE) / INTEREST_DENOMINATOR;

        // Transfer the repayment amount from borrower to contract
        IERC20(_loan.token).safeTransferFrom(
            _loan.borrower,
            address(this),
            repaymentAmount
        );

        // Distribute the staker share
        stakeContract.distributeInterest(_loan.token, stakerShare);

        emit loanRepaid(_loanId);
    }
}
}
