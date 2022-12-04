import { ethers } from "hardhat";

async function main() {
  console.log("\nUpdating...")
  // const [deployer] = await ethers.getSigners()
  // const vman = new ethers.Contract(contractAddress, vman.abi, deployer)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
