import { ethers } from "hardhat";

async function main() {
  console.log("\nDeployment in progress...")
  const Vman = await ethers.getContractFactory("Vman");
  const vman = await Vman.deploy("yo");
  console.log(`Version Manager deployed: ${vman.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
