// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";

contract Crowdfunding {
    address private deployer;

    constructor() {
        deployer = msg.sender;
    }

    // TODO: FUNCTION - get deployer address
    function getDeployer() public view returns (address) {
        return deployer;
    }
}
