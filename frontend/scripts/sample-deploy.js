// const { ethers } = require("hardhat");

async function main() {
  const TokenDeploy = await ethers.getContractFactory("Token");
  const token = await TokenDeploy.deploy();

  await token.deployed();

  console.log(`Token Deployed to: ${token.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });