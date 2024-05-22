// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "hardhat/console.sol";
import "./IDGenerator.sol";

contract Crowdfunding {
    address private deployer;
    IDGenerator private idGenerator;

    enum CampaignStatus {
        Active,
        Cancelled,
        Completed
    }

    struct Campaign {
        uint256 id;
        string title;
        string status;
        string endDateTime;
        string description;
        string thumbnailURI;
        uint256 raisedAmount;
        uint256 targetGoalAmount;
        uint256 minimumGoalAmount;
    }

    uint256[] private campaignsIDs;
    mapping(uint256 => Campaign) private campaigns;
    mapping(address => uint256[]) private usersCampaigns;

    constructor(address _idGeneratorAddress) {
        deployer = msg.sender;
        idGenerator = IDGenerator(_idGeneratorAddress);
    }

    // TODO: EVENT - event for creating a campaign
    event CreateCampaign(
        uint256 _id,
        string _title,
        string status,
        string _endDateTime,
        string _description,
        string _thumbnailURI,
        uint256 raisedAmount,
        uint256 _targetGoalAmount,
        uint256 _minimumGoalAmount
    );

    // TODO: FUNCTION - get a string value returned for the enum state of campaign status
    function getStatusString(
        CampaignStatus _status
    ) internal pure returns (string memory) {
        if (_status == CampaignStatus.Active) return "Active";
        else if (_status == CampaignStatus.Cancelled) return "Cancelled";
        else if (_status == CampaignStatus.Completed) return "Completed";
        else return "Pending";
    }

    // TODO: FUNCTION - get deployer address
    function getDeployer() public view returns (address) {
        return deployer;
    }

    // TODO: FUNCTION - create a new campaign
    function createCampaign(
        string memory _title,
        string memory _endDateTime,
        string memory _description,
        string memory _thumbnailURI,
        uint256 _targetGoalAmount,
        uint256 _minimumGoalAmount
    ) public {
        uint256 tempCampaignID = idGenerator.generateID();
        string memory tempStatus = getStatusString(CampaignStatus.Active);

        Campaign memory tempCampaign = Campaign(
            tempCampaignID,
            _title,
            tempStatus,
            _endDateTime,
            _description,
            _thumbnailURI,
            0,
            _targetGoalAmount,
            _minimumGoalAmount
        );

        campaigns[tempCampaignID] = tempCampaign;
        usersCampaigns[msg.sender].push(tempCampaignID);
        campaignsIDs.push(tempCampaignID);

        emit CreateCampaign(
            tempCampaignID,
            _title,
            tempStatus,
            _endDateTime,
            _description,
            _thumbnailURI,
            0,
            _targetGoalAmount,
            _minimumGoalAmount
        );
    }

    // TODO: FUNCTION - get campaign details
    function getCampaign(uint256 _id) public view returns (Campaign memory) {
        return campaigns[_id];
    }

    // TODO: FUNCTION - get all campaigns created or owned by a specific user
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

    // TODO: FUNCTION - get public campaigns
    /*
     * This function returns all the campaigns which exists on-chain
     * except the one's created by the users who called the respective
     * function.
     */
    function getPublicCampaigns() public view returns (Campaign[] memory) {
        uint256[] memory userCampaignsIDs = usersCampaigns[msg.sender];
        Campaign[] memory publicCampaigns = new Campaign[](
            campaignsIDs.length - userCampaignsIDs.length
        );

        for (uint256 i = 0; i < campaignsIDs.length; i++) {
            bool skipIteration = false;

            for (uint256 j = 0; j < userCampaignsIDs.length; j++) {
                if (userCampaignsIDs[j] == campaignsIDs[i]) {
                    skipIteration = true;
                    break;
                }
            }

            if (skipIteration) continue;

            publicCampaigns[i] = campaigns[campaignsIDs[i]];
        }

        return publicCampaigns;
    }
}
