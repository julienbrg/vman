import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    aurora_testnet: {
      url: 'https://testnet.aurora.dev',
      accounts: [`0x${process.env.AURORA_TESTNET_PRIVATE_KEY}`],
      chainId: 1313161555
    },
  },
};

export default config;
