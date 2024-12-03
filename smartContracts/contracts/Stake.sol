// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;


import "@openzeppelin/contracts/access/Ownable.sol";
import "./Lend.sol";
import "./User.sol"; // Import the User contract

contract Stake is  Ownable {
    IERC20 public immutable usdcToken;
    Lend public immutable nativeToken;
    User public userContract; // Reference to User contract

    mapping(address => bool) public allowedTokens;
    mapping(address => uint256) public stakedBalance;
    mapping(address => uint256) public stakedTime;

    uint256 public stakingPeriod = 7 days; // Default staking period
    uint256 public stakeFee = 10; // Fee percentage for staking
    uint256 public stakingRewardPercent=1;   //10% total reward of native token will be given after staking period is over;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event StakeFeeUpdated(uint256 newFee);
    event StakingPeriodUpdated(uint256 newPeriod);

    constructor(address _usdcToken, address _lendToken, address _userContract)Ownable(msg.sender) {
        usdcToken = IERC20(_usdcToken);
        nativeToken = Lend(_lendToken);
        userContract = User(_userContract);
    }

    modifier onlyStaker() {
        require(userContract.getUserRole(msg.sender) == User.Role.Staker, "Stake: Only stakers allowed");
        _;
    }

    modifier cooldownPeriod() {
        require(block.timestamp >= stakedTime[msg.sender] + stakingPeriod, "Stake: Staking period not over");
        _;
    }

    function setStakingPeriod(uint256 _newPeriod) external onlyOwner {
        stakingPeriod = _newPeriod;
        emit StakingPeriodUpdated(_newPeriod);
    }

    function setStakeFee(uint256 _newFee) external onlyOwner {
        stakeFee = _newFee;
        emit StakeFeeUpdated(_newFee);
    }

    function stakeTokens(uint256 _amount) external onlyStaker {
        require(_amount > 0, "Stake: Amount should be greater than 0");
        usdcToken.transferFrom(msg.sender, address(this), _amount);
        stakedBalance[msg.sender] += _amount;
        stakedTime[msg.sender] = block.timestamp;
        uint256 fee = (_amount * stakeFee) / 100;
        uint256 amountAfterFee = _amount - fee;
        emit Staked(msg.sender, amountAfterFee);
    }

    function unstakeTokens(uint256 _amount) external onlyStaker cooldownPeriod {
        require(stakedBalance[msg.sender] >= _amount, "Stake: Insufficient balance");
        stakedBalance[msg.sender] -= _amount;
        usdcToken.transfer(msg.sender, _amount);
        uint256 reward = (_amount * stakingRewardPercent )/100;
        nativeToken.transfer(msg.sender,reward);
        emit Unstaked(msg.sender, _amount);
    }

    // function claimReward()external onlyStaker{
    //     require(stakedBalance[msg.sender]>=0,"You don't have any staking");

    // }

    

    // function calculateReward(address _user)public view returns(uint256){
    //     uint256 amount= stakedBalance[msg.sender];
    //     if(amount==0){
    //         return 0;
    //     }
    //     uint256 time=stakedTime[msg.sender] ;
    //     uint256 stakingDuration=block.timestamp-time;

    // }
}


    // function calculateReward(address _user) public view returns (uint256) {
    //     StakeInfo storage stake = stakes[_user];
    //     if (stake.amount == 0 || block.timestamp <= stake.startTime) {
    //         return 0;
    //     }

    //     uint256 stakingDuration = block.timestamp - stake.startTime; // Time since last reward or stake
    //     uint256 reward = (stake.amount * rewardRate * stakingDuration) / (100 * rewardInterval);

    //     return reward - stake.rewardsClaimed; // Subtract already claimed rewards
    // }
