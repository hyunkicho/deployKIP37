import { ethers } from "hardhat";

async function main() {
    const bookNFTFactory = await ethers.getContractFactory("BookNFT");
    const bookNFT = await bookNFTFactory.attach("0xa32a50475f1b6de0126dde29c58365a32d7ee42a");
    const minted = await bookNFT.mint("0x0E702a92b26dfc3bf03C27f612D2fE3A1EBCEe45",10,5,[])
    console.log("minted >>>", minted);
}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
