import { ethers } from "hardhat";

async function main() {
    const bookNFTFactory = await ethers.getContractFactory("BookNFT");
    const bookNFT = await (bookNFTFactory.attach("0xa32a50475f1b6de0126dde29c58365a32d7ee42a"));
    console.log("totalSupply 0 >>> ", await bookNFT.totalSupply(0));

    console.log("total uri 4 >>> ", await bookNFT.uri(4));
    console.log("total uri 5 >>> ", await bookNFT.uri(5));
    console.log("total uri 6 >>> ", await bookNFT.uri(5));

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
