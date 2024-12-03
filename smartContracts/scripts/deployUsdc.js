const { ethers } = require("hardhat");

async function main() {
  // Get the Contract Factory for "User"
  const Contract = await ethers.getContractFactory("USDCToken"); // Replace "User" with your contract name

  // Deploy the contract
  const contract = await Contract.deploy(/* constructor arguments if any */);

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
//Lend token:0x2B806059b7Cc42e24266f80ce17Cc9A0153b4f4f
//Stake contract:0x1501265E178753fa23026B42FAd8A96D7dCeCdc3
