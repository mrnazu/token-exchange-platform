//SPDX-License-Identifier: Unlicense
/* eslint-disable no-unused-vars */
pragma solidity ^0.6.12;

import "hardhat/console.sol";

contract Token {
    string public name;
    string public symbol;
    uint256 public decimals = 18;
    uint256 public totalSupply;

    // Track Balances
    mapping(address => uint256) public balanceOf;

    constructor(
        string memory _name,
        string memory _symbol,
        uint256 _totalSupply
    ) public {
        name = _name;
        symbol = _symbol;
        totalSupply = _totalSupply * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }

    function transfer(
        address _to,
        uint256 _value
    ) public returns (bool success) {
        balanceOf[msg.sender] = balanceOf[msg.sender] - _value;
        balanceOf[_to] + _value;
    }
}
