import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Vman", function () {

  async function deployFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Vman = await ethers.getContractFactory("Vman");
    const vman = await Vman.deploy("https://bafybeihfsyjq6sxnlfchmpxrj2gcpjfdbxxihf5xfzgj2pw2rqxpralw3a.ipfs.w3s.link/my-post.html");

    return { vman, owner, otherAccount };
  }

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      const { vman, owner } = await loadFixture(deployFixture);
      expect(await vman.owner()).to.equal(owner.address);
    });
  });

  describe("Updates", function () {
    it("Should update", async function () {
      const { vman, owner } = await loadFixture(deployFixture);
      await vman.update("https://bafybeihfsyjq6sxnlfchmpxrj2gcpjfdbxxihf5xfzgj2pw2rqxpralw3a.ipfs.w3s.link/style.css");
      await expect(await vman.cid()).to.be.equal("https://bafybeihfsyjq6sxnlfchmpxrj2gcpjfdbxxihf5xfzgj2pw2rqxpralw3a.ipfs.w3s.link/style.css");
    });

    describe("Events", function () {
      //...
    });
  });
});
