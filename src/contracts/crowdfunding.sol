// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract Crowdfunding {
    address private contractOwner;

    struct Campaign {
        string title;
        uint256 minGoal;
        uint256 targetGoal;
        string endDateTime;
        string description;
        string thumbnailURI;
    }

    mapping(uint256 => Campaign) private campaigns;
    mapping(address => uint256[]) private usersCampaigns;

    constructor() {
        contractOwner = msg.sender;
    }

    // TODO: FUNCTION - get campaign details
    function getCampaign(uint256 _id) public view returns (Campaign memory) {
        return campaigns[_id];
    }
}
