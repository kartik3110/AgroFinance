// SPDX-License-Identifier: MIT
pragma solidity 0.8.27;

contract User {
    enum Role { None, Lender, Borrower, Staker }

    mapping(address => Role) public userRoles;
    mapping(address => bool) public addressToBool;

    event NewUser(address indexed user, Role role);

    function createUser() public returns (bool) {
        require(!addressToBool[msg.sender], "User already exists");
        addressToBool[msg.sender] = true;
        userRoles[msg.sender] = Role.Lender; // Default role
        emit NewUser(msg.sender, Role.Lender);
        return true;
    }

    function getUserRole(address _user) public view returns (Role) {
        return userRoles[_user];
    }

    function setRole(address _user, Role _role) external {
        userRoles[_user] = _role;
    }
}
