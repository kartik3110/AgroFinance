// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDCToken is ERC20 {
    address public owner;
    uint256 public constant MAX_SUPPLY = 1e28;
    uint256  public currentTotalSupply;

    constructor() ERC20("USDCToken", "USDC") {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "USDCToken: Only owner can mint");
        _;
    }

    function faucet(address _who, uint256 _amt) public  onlyOwner {
        require(currentTotalSupply + _amt <= MAX_SUPPLY, "USDCToken: cap exceeded");
        _mint(_who, _amt);
        currentTotalSupply += _amt;
    }
}
