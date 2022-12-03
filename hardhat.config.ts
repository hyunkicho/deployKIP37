import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  networks: {
    hardhat: {
    },
    baobob: {
      url: "https://api.baobab.klaytn.net:8651",
      accounts: [process.env.PRIVATE_KEY!]
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
