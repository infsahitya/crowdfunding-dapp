// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract IDGenerator {
    uint256 private currentID;

    constructor () {
        currentID = 0;
    }

    function generateID() public returns (uint256) {
        currentID += 1;
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        currentID,
                        block.timestamp,
                        blockhash(block.number),
                        msg.sender
                    )
                )
            );
    }

    function getCurrentID() public view returns (uint256) {
        return currentID;
    }
}
