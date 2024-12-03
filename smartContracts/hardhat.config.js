// require("@nomiclabs/hardhat-etherscan");
require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  solidity: "0.8.27",
  networks: {
    hardhat: {},
    bscTestnet: {
      url: process.env.BSC_TESTNET_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY, // Add your API key here
  },
};

// npx hardhat verify --network bscTestnet 0xfc6FEDe27B0C36Ffb21BCEF83051E6503A18729f "0xb53319D02210F72E55f9e2d39815e436fB7b9FF1"
//  "0x2B806059b7Cc42e24266f80ce17Cc9A0153b4f4f" "0x25c9F84D76ec43138fe3589224Af5bB8703982Bd"
