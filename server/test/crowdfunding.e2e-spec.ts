// @ts-ignore
import { ethers } from "hardhat";
import { expect } from "chai";

const tokens = (n: number) => ethers.utils.parseUnit(n.toString(), "ether");

const contractName = "Crowdfunding" as const;

describe("Crowdfunding Platform", () => {
  let app;
  let deployer: string;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();

    const Crowdfunding = await ethers.getContractFactory(contractName);
    app = await Crowdfunding.connect(deployer).deploy();
  });

  describe("Deployment", () => {
    it("Match Deployer", async () => {
      const data = await app.getDeployer();
      expect(data).to.be.equal(deployer);
    });
  });
});
