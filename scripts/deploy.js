// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const unlockTime = currentTimestampInSeconds + 60;

  // const lockedAmount = hre.ethers.utils.parseEther("0.001");

  // const Lock = await hre.ethers.getContractFactory("Lock");
  // const lock = await Lock.deploy(unlockTime, { value: lockedAmount });

  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();

  await counter.deployed();

  // console.log(
  //   `Lock with ${ethers.utils.formatEther(
  //     lockedAmount
  //   )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  // );

  console.log(`Counter contract deployed to ${counter.address}`);


  // const url = process.env.ALCHEMY_TESTNET_RPC_URL;

  // let artifacts = await hre.artifacts.readArtifact("Faucet");

  // const provider = new hre.ethers.providers.JsonRpcProvider(url);

  // let privateKey = process.env.TESTNET_PRIVATE_KEY;

  // let wallet = new hre.ethers.Wallet(privateKey, provider);

  // // Create an instance of a Faucet Factory
  // let factory = new hre.ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);

  // let faucet = await factory.deploy();

  // console.log("Faucet address:", faucet.address);

  // await faucet.deployed();


}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
