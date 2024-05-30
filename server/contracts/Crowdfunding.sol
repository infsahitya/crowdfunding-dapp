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
        address creator;
        string endDateTime;
        string description;
        string thumbnailURI;
        uint256 raisedAmount;
        uint256 targetGoalAmount;
        uint256 minimumGoalAmount;
        address[] donors;
    }

    uint256[] private campaignsIDs;
    mapping(uint256 => Campaign) private campaigns;
    mapping(address => uint256[]) private usersCampaigns;
    mapping(uint256 => mapping(address => uint256)) private usersDonations;

    constructor(address _idGeneratorAddress) {
        deployer = msg.sender;
        idGenerator = IDGenerator(_idGeneratorAddress);
    }

    /*
     * EVENT: CreateCampaign
     * An event to emit information about the campaign which is
     * created by the user.
     */
    event CreateCampaign(Campaign _campaign);

    /*
     * EVENT: ContributeToCampaign
     * An event to emit information about the campaign in which
     * user has contributed to.
     */
    event ContributeToCampaign(Campaign _campaign);

    /*
     * EVENT: EndCampaign
     * An event to emit information about the campaign which
     * has to end after reaching it's target or minimum
     * goal.
     */
    event EndCampaign(Campaign _campaign);

    /*
     * EVENT: AboutCampaign
     * An event to emit information about the campaign which
     * has to be aborted if it's owner wants to.
     */
    event AbortCampaign(Campaign _campaign);

    // TODO: MODIFIER - check whether campaign status before contribution
    modifier campaignActiveStatusCheck(uint256 _id) {
        Campaign memory tempCampaign = campaigns[_id];
        require(
            keccak256(abi.encodePacked(tempCampaign.status)) ==
                keccak256(
                    abi.encodePacked(getStatusString(CampaignStatus.Active))
                ),
            "A campaign should be active to accept donations,"
        );
        _;
    }

    // TODO: MODIFIER - check campaign have not reached goal
    modifier campaignNotReachedGoal(uint256 _id) {
        Campaign memory tempCampaign = campaigns[_id];
        require(
            tempCampaign.raisedAmount < tempCampaign.targetGoalAmount,
            "Campaign has already reached it's target goal"
        );
        _;
    }

    // TODO: MODIFIER - check campaign have reached goal
    modifier campaignReachedGoal(uint256 _id) {
        Campaign memory tempCampaign = campaigns[_id];
        require(
            tempCampaign.raisedAmount >= tempCampaign.targetGoalAmount ||
                tempCampaign.raisedAmount >= tempCampaign.minimumGoalAmount,
            "Campaign has not reached it's target goal yet."
        );
        _;
    }

    // TODO: MODIFIER - check whether donation money is not exceeding remaining amount
    modifier donationAmountThreshold(uint256 _id) {
        Campaign memory tempCampaign = campaigns[_id];
        require(
            msg.value <=
                tempCampaign.targetGoalAmount - tempCampaign.raisedAmount,
            "Donation amount cannot be more than remaining amount."
        );
        _;
    }

    // TODO: MODIFIER - check that the owner of the campaign is the one who is calling the withdraw function
    modifier checkCampaignOwner(uint256 _id) {
        Campaign memory tempCampaign = campaigns[_id];
        require(
            tempCampaign.creator == msg.sender,
            "Only owner of the campaign can end the campaign"
        );
        _;
    }

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
        require(
            _targetGoalAmount >= _minimumGoalAmount,
            "Minimum goal cannot be more than target goal."
        );

        uint256 tempCampaignID = idGenerator.generateID();
        string memory tempStatus = getStatusString(CampaignStatus.Active);

        address[] memory tempDonors;

        Campaign memory tempCampaign = Campaign(
            tempCampaignID,
            _title,
            tempStatus,
            msg.sender,
            _endDateTime,
            _description,
            _thumbnailURI,
            0,
            _targetGoalAmount,
            _minimumGoalAmount,
            tempDonors
        );

        campaigns[tempCampaignID] = tempCampaign;
        usersCampaigns[msg.sender].push(tempCampaignID);
        campaignsIDs.push(tempCampaignID);

        emit CreateCampaign(tempCampaign);
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
    // function getPublicCampaigns() public view returns (Campaign[] memory) {
    //     uint256[] memory userCampaignsIDs = usersCampaigns[msg.sender];
    //     Campaign[] memory publicCampaigns = new Campaign[](
    //         campaignsIDs.length - userCampaignsIDs.length
    //     );

    //     for (uint256 i = 0; i < campaignsIDs.length; i++) {
    //         bool skipIteration = false;

    //         for (uint256 j = 0; j < userCampaignsIDs.length; j++) {
    //             if (userCampaignsIDs[j] == campaignsIDs[i]) {
    //                 skipIteration = true;
    //                 break;
    //             }
    //         }

    //         if (skipIteration) continue;

    //         publicCampaigns[i] = campaigns[campaignsIDs[i]];
    //     }

    //     return publicCampaigns;
    // }
    function getPublicCampaigns() public view returns (Campaign[] memory) {
        Campaign[] memory allCampaigns = new Campaign[](campaignsIDs.length);

        for (uint256 i = 0; i < campaignsIDs.length; i++) {
            allCampaigns[i] = campaigns[campaignsIDs[i]];
        }

        return allCampaigns;
    }

    // TODO: FUNCTION - contributing money to a campaign
    function contributeToCampaign(
        uint256 _id
    )
        public
        payable
        campaignNotReachedGoal(_id)
        donationAmountThreshold(_id)
        campaignActiveStatusCheck(_id)
    {
        Campaign storage tempCampaign = campaigns[_id];
        tempCampaign.raisedAmount += msg.value;
        tempCampaign.donors.push(msg.sender);

        campaigns[_id] = tempCampaign;

        usersDonations[_id][msg.sender] += msg.value;

        emit ContributeToCampaign(tempCampaign);
    }

    // TODO: FUNCION - end the campaign and withdraw and transfer all the funds settled in its owners wallet.
    function endCampaignAndWithdrawFunds(
        uint256 _id
    )
        public
        checkCampaignOwner(_id)
        campaignReachedGoal(_id)
        campaignActiveStatusCheck(_id)
    {
        Campaign memory tempCampaign = campaigns[_id];
        tempCampaign.status = getStatusString(CampaignStatus.Completed);

        (bool sent, ) = tempCampaign.creator.call{value: address(this).balance}(
            ""
        );
        require(sent, "Failed to withdraw funds and end campaign");

        campaigns[_id] = tempCampaign;

        emit EndCampaign(tempCampaign);
    }

    // TODO: FUNCTION - abort a campaign and refund all the donor their respective donated amounts
    function abortCampaignAndRefundDonors(
        uint256 _id
    ) public checkCampaignOwner(_id) campaignActiveStatusCheck(_id) {
        Campaign memory tempCampaign = campaigns[_id];

        for (uint256 i = 0; i < tempCampaign.donors.length; i++) {
            (bool sent, ) = tempCampaign.donors[i].call{
                value: usersDonations[_id][tempCampaign.donors[i]]
            }("");
            require(sent, "Reverting funds to donors wallet address failed.");

            usersDonations[_id][tempCampaign.donors[i]] = 0;
        }

        tempCampaign.raisedAmount = 0;
        tempCampaign.status = getStatusString(CampaignStatus.Cancelled);
        campaigns[_id] = tempCampaign;

        emit AbortCampaign(tempCampaign);
    }
}
