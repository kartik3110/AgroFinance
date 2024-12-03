const { ethers } = require("hardhat");

async function main() {
  // Get the Contract Factory for "User"
  const Contract = await ethers.getContractFactory("Lend"); // Replace "User" with your contract name



  const userContract = "0x25c9F84D76ec43138fe3589224Af5bB8703982Bd";

  // Deploy the contract
  const contract = await Contract.deploy(userContract);

  // Wait for the deployment to complete
  await contract.waitForDeployment();

  // Get the deployed contract address
  const address = contract.target;

  console.log("Contract deployed to address:", address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Error during deployment:", error);
    process.exit(1);
  });

//User contract:0x25c9F84D76ec43138fe3589224Af5bB8703982Bd
//USDC contract:0xb53319D02210F72E55f9e2d39815e436fB7b9FF1
