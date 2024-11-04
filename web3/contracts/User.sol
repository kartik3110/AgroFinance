// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract User {
    mapping(address => uint256) private addressToIndex;
    mapping(address => bool) public addressToBool;

    // Enum to define user roles
    enum Role {
        None,
        Lender,
        Borrower,
        Staker
    }
    mapping(address => Role) public userRoles;

    address[] private addresses;

    event NewUser(address indexed _from, Role _role);

    constructor() {
        addresses.push(msg.sender);
        addressToBool[msg.sender] = true;
        addressToIndex[msg.sender] = addresses.length - 1;
        userRoles[msg.sender] = Role.Lender; // Default role
    }

    function createUser() public returns (bool) {
        require(!addressToBool[msg.sender], "User already exists");

        addresses.push(msg.sender);
        addressToBool[msg.sender] = true;
        addressToIndex[msg.sender] = addresses.length - 1;

        // Default role can be Staker
        userRoles[msg.sender] = Role.Lender;
        emit NewUser(msg.sender, userRoles[msg.sender]);

        return true;
    }

    function userExists() public view returns (bool) {
        return addressToBool[msg.sender];
    }

    function getIndexByAddress() public view returns (uint256) {
        return addressToIndex[msg.sender];
    }

    function registerAsLender() public {
        require(addressToBool[msg.sender], "User does not exist");
        userRoles[msg.sender] = Role.Lender;
        emit NewUser(msg.sender, Role.Lender);
    }

    function registerAsBorrower() public {
        require(addressToBool[msg.sender], "User does not exist");
        userRoles[msg.sender] = Role.Borrower;
        emit NewUser(msg.sender, Role.Borrower);
    }

    function registerAsStaker() public {
        require(addressToBool[msg.sender], "User does not exist");
        userRoles[msg.sender] = Role.Staker;
        emit NewUser(msg.sender, Role.Staker);
    }

    function getUserRole() public view returns (Role) {
        return userRoles[msg.sender];
    }
}
