import { ethers } from "hardhat";
const fs = require('fs');

async function main() {
  console.log("\nUpdating...")
  const [deployer] = await ethers.getSigners()
  
  const abiDir = __dirname + '/../artifacts/contracts';
  const vmanAbiContract = abiDir + "/" + "Vman.sol" + "/" + "Vman" + ".json" 

  let vmanAbi;
  try {
    vmanAbi = JSON.parse(fs.readFileSync(vmanAbiContract,{encoding:'utf8', flag:'r'}));
  } catch (error) {
    console.log("hello error", error)
    return;
  }

  // Change this value with your contract address
  const address = "0x6935511b862A1bA9d3B991cA00d583c71A6dE78b"

  const vman = new ethers.Contract(address, vmanAbi.abi, deployer)
  const update = await vman.update("updated, thanks! :)", "v2")
  console.log(update)

  console.log("New website url:", await vman.cid())
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
