// @ts-ignore
import { ethers } from "hardhat";
import { expect } from "chai";

const tokens = (n) => ethers.utils.parseUnit(n.toString(), "ether");

const contractName = "Crowdfunding";

describe("Crowdfunding Platform", () => {
  let app;
  let deployer;

  beforeEach(async () => {
    [deployer] = await ethers.getSigners();

    const Crowdfunding = await ethers.getContractFactory(contractName);
    app = await Crowdfunding.connect(deployer).deploy(contractName);
  });

  describe("Deployment", () => {
    it("Match Deployer", async () => {
      const data = await app.getDeployer();
      expect(data).to.be.equal(deployer);
    });
  });
});
