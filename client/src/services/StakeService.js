import { stakeContract } from "../contracts/config";
import { readContract, writeContract } from "@wagmi/core";
import { config } from "App";

// Functions to interact with the Stake contract
const StakeService = {
  async stakeTokens(amount,account) {
    console.log("stake contract is---->",stakeContract.address);
    console.log("account   is---->", account);
    if (!amount || !account) {
      throw new Error("Amount and account are required to stake tokens.");
    }
    
    try {
      const tx = await writeContract(config,{
        address: stakeContract?.address,
        abi: stakeContract?.abi,
        functionName: "stakeTokens",
        args: [amount],
      });
      return tx;
    } catch (error) {
      console.error("Error staking tokens:", error);
      throw error;
    }
  },

  async unstakeTokens(amount) {
    try {
      const tx = await writeContract(config,{
        ...stakeContract,
        functionName: "unstakeTokens",
        args: [amount],
      });
      return tx;
    } catch (error) {
      console.error("Error unstaking tokens:", error);
      throw error;
    }
  },

  async getStakedBalance(userAddress) {
    try {
      const result = await readContract({
        ...stakeContract,
        functionName: "stakedBalance",
        args: [userAddress],
      });
      return result;
    } catch (error) {
      console.error("Error reading staked balance:", error);
      throw error;
    }
  },
};

export default StakeService;
