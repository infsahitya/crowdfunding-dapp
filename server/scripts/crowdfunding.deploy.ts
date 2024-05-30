import hre from "hardhat";
import { ContractFactory } from "ethers";
import { Crowdfunding, IDGenerator } from "../typechain-types";

const tokens = (n: number) => hre.ethers.parseUnits(n.toString(), "ether");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
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

  console.log(app.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
