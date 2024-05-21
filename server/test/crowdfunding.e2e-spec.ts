import hre from "hardhat";
import { expect } from "chai";
import { ContractFactory } from "ethers";

const tokens = (n: number) => hre.ethers.parseUnits(n.toString(), "ether");

const contractName = "Crowdfunding" as const;

describe("Crowdfunding Platform", () => {
  let app: any;
  let deployer: any;

  beforeEach(async () => {
    [deployer] = await hre.ethers.getSigners();

    const Crowdfunding: ContractFactory =
      await hre.ethers.getContractFactory(contractName);
    app = await Crowdfunding.connect(deployer).deploy();
  });

  describe("Deployment", () => {
    it("Match Deployer", async () => {
      const data: string = await app.getDeployer();
      expect(data).to.be.equal(deployer);
    });
  });
});
