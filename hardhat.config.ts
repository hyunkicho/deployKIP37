import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    baobab: {
      url: "https://api.baobab.klaytn.net:8651",
      accounts: [process.env.PRIVATE_KEY!]
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts: [process.env.TESTPK!]
    }
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10000
      }
    }
  },
};

export default config;
