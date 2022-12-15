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
  const address = "0x6cb3DBF3dAD25bB911558f174F87441Acf517c88"

  const vman = new ethers.Contract(address, vmanAbi.abi, deployer)
  await vman.update("updated, thanks! :)", "v2")

  const newCid = await vman.cid()
  console.log("New uri:", newCid)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});