// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Lend.sol";
import "./User.sol"; // Import the User contract

contract Stake is ChainlinkClient, Ownable {
    IERC20 public immutable usdcToken;
    Lend public immutable nativeToken;
    User public userContract; // Reference to User contract

    mapping(address => bool) public allowedTokens;
    mapping(address => uint256) public lastStakeTime;
    uint256 public cooldownPeriod = 1 days;

    event TokensStaked(
        address indexed staker,
        address indexed token,
        uint256 amount
    );
    event TokensUnstaked(
        address indexed staker,
        address indexed token,
        uint256 amount
    );
    event Voted(address indexed staker, uint256 indexed loanId, uint256 amount);

    constructor(
        address _usdcToken,
        address _nativeToken,
        address _userContract
    ) {
        usdcToken = IERC20(_usdcToken);
        nativeToken = Lend(_nativeToken);
        userContract = User(_userContract); // Set the User contract reference
        allowedTokens[_usdcToken] = true;
    }

    function stakeTokens(address _token, uint256 _amount) external {
        require(
            userContract.getUserRole(msg.sender) == User.Role.Staker,
            "Only stakers can stake tokens"
        ); // Role check
        require(_amount > 0, "stake: amount cannot be zero");
        require(allowedTokens[_token], "stake: token not allowed");

        require(
            IERC20(_token).balanceOf(msg.sender) >= _amount,
            "stake: insufficient balance"
        );

        uint256 sharesToMint = nativeToken.getSharesToMint(_token, _amount);
        nativeToken.mintShares(msg.sender, _token, _amount);
        require(
            nativeToken.balanceOf(msg.sender) >= sharesToMint,
            "stake: invalid stake"
        );

        lastStakeTime[msg.sender] = block.timestamp;
        emit TokensStaked(msg.sender, _token, _amount);
    }

    function unstakeTokens(address _token, uint256 _amount) external {
        require(
            userContract.getUserRole(msg.sender) == User.Role.Staker,
            "Only stakers can unstake tokens"
        ); // Role check
        require(
            block.timestamp > lastStakeTime[msg.sender] + cooldownPeriod,
            "stake: cooldown period not passed"
        );

        uint256 sharesToBurn = nativeToken.getSharesToBurn(_token, _amount);
        require(
            nativeToken.balanceOf(msg.sender) >= sharesToBurn,
            "stake: insufficient balance"
        );

        nativeToken.burnShares(msg.sender, _token, _amount);
        emit TokensUnstaked(msg.sender, _token, _amount);
    }

    function vote(uint256 _loanId, uint256 _amount) external {
        require(
            userContract.getUserRole(msg.sender) == User.Role.Staker,
            "Only stakers can vote"
        ); // Role check
        uint256 balance = nativeToken.balanceOf(msg.sender);
        require(balance > 0, "stake: not enough stake");
        require(_amount > 0, "stake: amount cannot be zero");

        nativeToken.logVote(_loanId, msg.sender, _amount);
        emit Voted(msg.sender, _loanId, _amount);
    }
}
