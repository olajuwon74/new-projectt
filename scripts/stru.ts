
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.

// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

import { ethers } from "hardhat";

async function stru() {

  // We get the contract to deploy
  const testContract = ethers.getContractFactory('City')
  const testContract2 = (await testContract).deploy();

  await (await testContract2).deployed()

//   console.log("State deployed to:", state.address);
const State = {
    houses: 3,
    people: 4,
}

const tx = await (await testContract2).addState(State)
const txWait = await tx.wait()
const data = txWait.events?.[0]?.args?.[0]?.people;
console.log(data);

const output = await (await testContract2).getState()
// console.log(output)

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
stru().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
