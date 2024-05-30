import hre from "hardhat";
import { ContractFactory } from "ethers";
import { campaigns } from "../seed/dummy.seed.json";
import { Crowdfunding, IDGenerator } from "../typechain-types";

const tokens = (n: number) => hre.ethers.parseUnits(n.toString(), "ether");

async function main() {
  const [deployer, randomUser] = await hre.ethers.getSigners();
  let app: Crowdfunding, idGenerator: IDGenerator;

  const IDGenerator: ContractFactory =
    await hre.ethers.getContractFactory("IDGenerator");
  idGenerator = (await IDGenerator.connect(deployer).deploy()) as IDGenerator;

  await idGenerator.waitForDeployment();

  const Crowdfunding: ContractFactory =
    await hre.ethers.getContractFactory("Crowdfunding");
  app = (await Crowdfunding.connect(deployer).deploy(
    idGenerator.getAddress(),
  )) as Crowdfunding;

  await app.waitForDeployment();

  campaigns.forEach(async (campaign) => {
    const transaction = await app
      .connect(randomUser)
      .createCampaign(
        campaign.title,
        campaign.endDateTime,
        campaign.description,
        campaign.thumbnailURI,
        tokens(campaign.targetGoalAmount),
        tokens(campaign.minimumGoalAmount),
      );
    await transaction.wait();

    console.log(`Campaign Added - ${campaign.title}`);
  });

  campaigns.forEach(async (campaign) => {
    const transaction = await app
      .connect(deployer)
      .createCampaign(
        campaign.title,
        campaign.endDateTime,
        campaign.description,
        campaign.thumbnailURI,
        tokens(campaign.targetGoalAmount),
        tokens(campaign.minimumGoalAmount),
      );
    await transaction.wait();

    console.log(`Campaign Added - ${campaign.title}`);
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
