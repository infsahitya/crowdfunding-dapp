import hre from "hardhat";
import { expect } from "chai";
import { ContractFactory } from "ethers";
import { Crowdfunding } from "../typechain-types/Crowdfunding";

const tokens = (n: number) => hre.ethers.parseUnits(n.toString(), "ether");

const dummyCampaign = {
  endDateTime: "0000",
  minimumGoalAmount: 123,
  targetGoalAmount: 23456,
  title: "Example Campaign",
  description: "Some description",
  thumbnailURI: "http://google.com",
} as const;

describe("Crowdfunding Platform", () => {
  let app: Crowdfunding, idGenerator: any;
  let deployer: any, user: any;

  beforeEach(async () => {
    [deployer, user] = await hre.ethers.getSigners();

    const IDGenerator: ContractFactory =
      await hre.ethers.getContractFactory("IDGenerator");
    idGenerator = await IDGenerator.connect(deployer).deploy();

    await idGenerator.waitForDeployment();

    const Crowdfunding: ContractFactory =
      await hre.ethers.getContractFactory("Crowdfunding");
    app = (await Crowdfunding.connect(deployer).deploy(
      idGenerator.getAddress(),
    )) as Crowdfunding;

    await idGenerator.waitForDeployment();
  });

  describe("Deployment", () => {
    it("Match Deployer", async () => {
      const data: string = await app.getDeployer();
      expect(data).to.be.equal(deployer);
    });
  });

  describe("Campaign", () => {
    let transaction;

    beforeEach(async () => {
      transaction = await app
        .connect(user)
        .createCampaign(
          dummyCampaign.title,
          dummyCampaign.endDateTime,
          dummyCampaign.description,
          dummyCampaign.thumbnailURI,
          dummyCampaign.targetGoalAmount,
          dummyCampaign.minimumGoalAmount,
        );

      await transaction.wait();
    });

    it("Create", async () => {});
  });
});
