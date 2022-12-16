import { ethers } from "hardhat";
const hre = require("hardhat");

async function main() {
  console.log("\nDeployment in progress...")
  const Vault = await ethers.getContractFactory("Vault");
  const vault = await Vault.deploy("bafybeihprzyvilohv6zwyqiel7wt3dncpjqdsc6q7xfj3iuraoc7n552ya", "v1");
  console.log(`Version Manager deployed: ${vault.address}`);

  await vault.deployTransaction.wait(2)
  const ownershipTransfer = await vault.transferOwnership("0xdA29B7D299e3a6A77f1ceB2fABC83399ABFc14B8")
  console.log("Ownership transferred to 0xdA29B7D299e3a6A77f1ceB2fABC83399ABFc14B8 ✅")

  console.log("Etherscan verification in progress...")
  await vault.deployTransaction.wait(6)
  await hre.run("verify:verify", { network: "goerli", address: vault.address, constructorArguments: ["bafybeihprzyvilohv6zwyqiel7wt3dncpjqdsc6q7xfj3iuraoc7n552ya", "v1"], });
  console.log("Etherscan verification done. ✅")

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
