
async function main() {
  // Get the Contract Factory for "User"
  const Contract = await ethers.getContractFactory("User"); // Replace "User" with your contract name

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
