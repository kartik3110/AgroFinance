import { usdcContract } from "../contracts/config";
import { readContract, writeContract } from "@wagmi/core";
import { config } from "App";

// Functions to interact with the USDC contract
const USDCService = {
  async faucet(recipient, amount) {
    try {
      const tx = await writeContract({
        ...usdcContract,
        functionName: "faucet",
        args: [recipient, amount],
      });
      return tx;
    } catch (error) {
      console.error("Error minting USDC tokens:", error);
      throw error;
    }
  },

  async getBalance(userAddress) {
    try {
      const result = await readContract({
        ...usdcContract,
        functionName: "balanceOf",
        args: [userAddress],
      });
      return result;
    } catch (error) {
      console.error("Error reading USDC balance:", error);
      throw error;
    }
  },
  async approve(tokenAddress,spender, amount) {
    // address: stakeContract?.address,
    //     abi: stakeContract?.abi,
    try {
      const tx = await writeContract(config, {
        address:tokenAddress,
        abi: usdcContract?.abi,
        functionName: "approve",
        args: [spender, amount],
      });
      console.log("USDC approval transaction:", tx);
      return tx;
    } catch (error) {
      console.error("Error approving USDC tokens:", error);
      throw error;
    }
  },

  /**
   * Check the allowance of the staking contract.
   * @param {string} owner - Owner's address.
   * @param {string} spender - Staking contract's address.
   * @returns {Promise<string>} Allowance amount.
   */
  async getAllowance(owner, spender) {
    try {
      const allowance = await readContract(config,{
        ...usdcContract,
        functionName: "allowance",
        args: [owner, spender],
      });
      console.log("USDC allowance:", allowance.toString());
      return allowance;
    } catch (error) {
      console.error("Error checking USDC allowance:", error);
      throw error;
    }
  },
};

export default USDCService;
