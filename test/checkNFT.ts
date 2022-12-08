import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";
import { BookNFT } from '../typechain-types/contracts/BookNFT';

describe("BookNFT", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.

  async function deployNftFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const BookNFTFactory = await ethers.getContractFactory("BookNFT");
    const bookNFT = await BookNFTFactory.deploy();

    return { bookNFT, owner, otherAccount };
  }

  describe("Deployment and get token uri", function () {
    it("Should set the right uri", async function () {
      const { bookNFT } = await loadFixture(deployNftFixture);
      console.log(await bookNFT.uri(0))
      console.log(await bookNFT.uri(1))
    });
  });
});
