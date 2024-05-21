// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IDGenerator.sol";

contract Crowdfunding {
    address private deployer;
    IDGenerator private idGenerator;

    struct Campaign {
        string title;
        string endDateTime;
        string description;
        string thumbnailURI;
        uint256 targetGoalAmount;
        uint256 minimumGoalAmount;
    }

    mapping(uint256 => Campaign) private campaigns;
    mapping(address => uint256[]) private usersCampaigns;

    constructor(address _idGeneratorAddress) {
        deployer = msg.sender;
        idGenerator = IDGenerator(_idGeneratorAddress);
    }

    // TODO: EVENT - event for creating a campaign
    event CreateCampaign(uint256 _id, string _title, string _endDateTime, string _description, string _thumbnailURI, uint256 _targetGoalAmount, uint256 _minimumGoalAmount);

    // TODO: FUNCTION - get deployer address
    function getDeployer() public view returns (address) {
        return deployer;
    }

    function createCampaign(
        string memory _title,
        string memory _endDateTime,
        string memory _description,
        string memory _thumbnailURI,
        uint256 _targetGoalAmount,
        uint256 _minimumGoalAmount
    ) public {
        Campaign memory tempCampaign = Campaign(
            _title,
            _endDateTime,
            _description,
            _thumbnailURI,
            _targetGoalAmount,
            _minimumGoalAmount
        );

        uint256 tempCampaignID = idGenerator.generateID();

        campaigns[tempCampaignID] = tempCampaign;
        usersCampaigns[msg.sender].push(tempCampaignID);

        emit CreateCampaign(tempCampaignID, _title, _endDateTime, _description, _thumbnailURI, _targetGoalAmount, _minimumGoalAmount);
    }

    // TODO: FUNCTION - get campaign details
    function getCampaign(uint256 _id) public view returns (Campaign memory) {
        return campaigns[_id];
    }

    function getUserCampaigns() public view returns (Campaign[] memory) {
        uint256[] memory userCampaignIDs = usersCampaigns[msg.sender];
        Campaign[] memory userCampaigns = new Campaign[](
            userCampaignIDs.length
        );

        for (uint256 i = 0; i < userCampaignIDs.length; i++) {
            userCampaigns[i] = campaigns[userCampaignIDs[i]];
        }

        return userCampaigns;
    }
}
