// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/utils/Counters.sol";

contract IDGenerator {
    using Counters for Counters.Counter;
    Counters.Counter private _counter;

    function generateId() public returns (uint256) {
        _counter.increment();
        return
            uint256(
                keccak256(
                    abi.encodePacked(
                        _counter.current(),
                        block.timestamp,
                        block.difficulty,
                        msg.sender
                    )
                )
            );
    }

    function getCurrentId() public view returns (uint256) {
        return _counter.current();
    }
}
