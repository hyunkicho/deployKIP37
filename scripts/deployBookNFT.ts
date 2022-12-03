import { ethers } from "hardhat";

async function main() {
  const BookNFT = await ethers.getContractFactory("BookNFT");
  const bookNFT = await BookNFT.deploy();
  await bookNFT.deployed();
  // bookNFT.mint("0x0E702a92b26dfc3bf03C27f612D2fE3A1EBCEe45",1,2,"");
  console.log(`book NFT deployed with address ${bookNFT.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
