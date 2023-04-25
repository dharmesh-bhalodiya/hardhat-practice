
const hre = require("hardhat");

async function main(){
    const contractAddress = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
    // const myContract = await hre.ethers.getContractAt("Contract", contractAddress);
    
    const CallContract = await hre.ethers.getContractFactory("Caller");
    const callContract = await CallContract.deploy(contractAddress);
    console.log(`Counter contract deployed to ${callContract.address}`);

    await callContract.callIt();
    console.log("Completed");
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });