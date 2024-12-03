// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;


import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./User.sol";

contract Lend is  ERC20("AGRICOLA", "AGC") {
    using SafeERC20 for IERC20;
    User public userContract;

    uint256 public constant MIN_VOTES = 1;

    address public governance;
    uint256 public FEES_NUMERATOR = 30; // 3% protocol fees on withdraw
    uint256 public FEES_DENOMINATOR = 1000;
    uint256 public constant FIXED_INTEREST_RATE = 6;

    mapping(address => mapping(address => uint256)) public lendingBalance;
    mapping(address => uint256) public uniqueTokensLent;
    mapping(address => address) public tokenPriceFeedMapping;
    address[] public allowedTokens;
    address[] public lenders;
    mapping(address => uint16) public tokenMultiplier;

    event Lent(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount, uint256 fees);

    mapping(address => bool) public auth;

    struct Loan {
        address token;
        uint256 principal;
        uint256 rateInBasisPoints;
        uint256 totalAmount;
        uint256 endTimestamp;
        uint256 currentVoteCount;
        uint256 totalAmountVoted;
        address borrower;
        bool active;
        bool repaid;
        bool approved;
        string mongoId;
    }

    event newLoanRequest(uint256 indexed loanId);
    event loanApproved(uint256 indexed loanId);
    event loanRepaid(uint256 indexed loanId);
    event loanLiquidated(uint256 indexed loanId);

    mapping(uint256 => Loan) public loans;
    uint256 public loanId;

    mapping(address => mapping(uint256 => uint256)) public votes;
    mapping(uint256 => address[]) public voters;

    constructor(address _userContract) {
        governance = msg.sender;
        userContract = User(_userContract); // Set the User contract reference
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

    function updateMultiplier(address token, uint16 multiplier) external onlyGovernance {
        tokenMultiplier[token] = multiplier;
    }

    function setPriceFeedContract(address token, address priceFeed) public onlyGovernance {
        tokenPriceFeedMapping[token] = priceFeed;
    }

    function lendTokens(uint256 _amount, address _token) external {
        require(userContract.getUserRole(msg.sender) == User.Role.Lender, "Only lenders can lend tokens");
        require(_amount > 0, "lend: amount cannot be 0");
        require(tokenIsAllowed(_token), "lend: unauthorized token");

        updateUniqueTokensLent(msg.sender, _token);
        lendingBalance[_token][msg.sender] += _amount;

        emit Lent(msg.sender, _amount);

        IERC20(_token).safeTransferFrom(msg.sender, address(this), _amount);
        uint256 sharesToMint = getSharesToMint(_token, _amount);
        _mint(msg.sender, sharesToMint);
    }

    function getSharesToMint(address token, uint256 amount) public view returns (uint256) {
        return (amount * uint256(tokenMultiplier[token])) / 1000;
    }

    function withdrawShares(address token, uint amount) external {
        require(userContract.getUserRole(msg.sender) == User.Role.Lender, "Only lenders can Withdraw Shares");
        require(balanceOf(msg.sender) >= amount, "lend: no outstanding shares");

        uint256 fees = processFeesAmount(amount);
        uint256 amountAfterFees = amount - fees;

        uint256 amountToBurn = getSharesToBurn(token, amount);
        _burn(msg.sender, amountToBurn);
        IERC20(token).safeTransfer(msg.sender, amountAfterFees);
    }

    function getSharesToBurn(address token, uint256 amount) public view returns (uint256) {
        return (amount * 1000) / uint256(tokenMultiplier[token]);
    }

    function withdrawTokens(uint256 _amount, address _token) public {
        uint256 balance = lendingBalance[_token][msg.sender];
        require(balance > 0, "lend: lending balance cannot be 0");
        require(balance >= _amount, "lend: withdrawal balance cannot be less than lending balance");

        uint256 fees = processFeesAmount(_amount);
        uint256 amountAfterFees = _amount - fees;

        lendingBalance[_token][msg.sender] = balance - _amount;
        if (lendingBalance[_token][msg.sender] == 0) {
            uniqueTokensLent[msg.sender]--;
        }

        emit Withdrawn(msg.sender, amountAfterFees, fees);
        IERC20(_token).safeTransfer(msg.sender, amountAfterFees);
        IERC20(_token).safeTransfer(governance, fees);
    }

    function processFeesAmount(uint256 _amount) internal view returns (uint256) {
        return (FEES_NUMERATOR * _amount) / FEES_DENOMINATOR;
    }

    function tokenIsAllowed(address token) public view returns (bool) {
        for (uint256 allowedTokensIndex = 0; allowedTokensIndex < allowedTokens.length; allowedTokensIndex++) {
            if (allowedTokens[allowedTokensIndex] == token) {
                return true;
            }
        }
        return false;
    }

    function updateUniqueTokensLent(address user, address token) internal {
        if (lendingBalance[token][user] == 0) {
            uniqueTokensLent[user]++;
        }
    }

    function createBorrowRequest(address token, uint256 principal, uint256 endTimestamp, address borrower, string memory mongoId) external {
        require(userContract.getUserRole(msg.sender) == User.Role.Borrower, "Only Borrower can create Borrow Request");

        Loan memory loan = Loan(
            token,
            principal,
            FIXED_INTEREST_RATE,
            principal + (principal * FIXED_INTEREST_RATE) / 100,
            endTimestamp,
            0,  // currentVoteCount
            0,  // totalAmountVoted
            borrower,
            true,
            false,
            false,
            mongoId
        );
        loans[loanId++] = loan;
        emit newLoanRequest(loanId);
    }

    function logVote(uint256 _loanId, address _staker, uint256 _amount) external onlyAuth {
        require(userContract.getUserRole(msg.sender) == User.Role.Staker, "Only Stakers can log Vote");

        require(votes[_staker][_loanId] == 0, "lend: already voted");
        Loan storage loan = loans[_loanId];
        require(loan.token != address(0) && loan.active && !loan.repaid, "loan: invalid loan");

        require(balanceOf(_staker) > 0, "lend: no stake");
        transferFrom(_staker, address(this), _amount);

        votes[_staker][_loanId] = _amount;
        voters[_loanId].push(_staker);
        loan.totalAmountVoted += _amount;
        loan.currentVoteCount++;

        uint256 totalStakers = voters[_loanId].length;
        if (loan.currentVoteCount > totalStakers / 2 && loan.totalAmountVoted >= loan.principal) {
            loan.approved = true;
            IERC20(loan.token).transfer(loan.borrower, loan.principal);
            emit loanApproved(_loanId);
        }
    }

    function repayLoan(uint256 _loanId) external {
        Loan storage _loan = loans[_loanId];
        require(_loan.approved, "lend: Loan is not approved");
        require(!_loan.repaid, "lend: Loan already repaid");
        require(msg.sender == _loan.borrower, "lend: Not allowed");

        uint256 totalRepayment = _loan.totalAmount;
        uint256 chargeFee = (totalRepayment * FEES_NUMERATOR) / FEES_DENOMINATOR;
        uint256 repaymentAmount = totalRepayment + chargeFee;

        IERC20(_loan.token).safeTransferFrom(_loan.borrower, address(this), repaymentAmount);
        _loan.repaid = true;
        _loan.active = false;

        emit loanRepaid(_loanId);
    }
}
