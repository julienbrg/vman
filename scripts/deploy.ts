import { ethers } from "hardhat";

async function main() {
  console.log("\nDeployment in progress...")
  const Vman = await ethers.getContractFactory("Vman");
  const vman = await Vman.deploy("https://bafybeihfsyjq6sxnlfchmpxrj2gcpjfdbxxihf5xfzgj2pw2rqxpralw3a.ipfs.w3s.link/my-post.html", "v1");
  console.log(`Version Manager deployed: ${vman.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
