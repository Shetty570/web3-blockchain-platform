require("@nomiclabs/hardhat-waffle");
require("dotenv").config();

module.exports = {
  defaultNetwork: "sepolia",
  solidity: "0.8.9",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
};
