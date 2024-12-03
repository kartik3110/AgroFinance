import { readContract, writeContract } from "@wagmi/core";
import { lendContract } from "../contracts/config"; // Define lendContract with address and ABI
import { config } from "App";

const LendService = {
  // Lend tokens by transferring and minting shares
  async lendTokens(amount, tokenAddress, account) {
    if (!amount || !tokenAddress || !account) {
      throw new Error(
        "Amount, token address, and account are required to lend tokens."
      );
    }
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "lendTokens",
        args: [amount, tokenAddress],
      });
      return tx;
    } catch (error) {
      console.error("Error lending tokens:", error);
      throw error;
    }
  },

  // Withdraw shares by burning and transferring tokens
  async withdrawShares(tokenAddress, amount) {
    if (!amount || !tokenAddress) {
      throw new Error(
        "Amount and token address are required to withdraw shares."
      );
    }
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "withdrawShares",
        args: [tokenAddress, amount],
      });
      return tx;
    } catch (error) {
      console.error("Error withdrawing shares:", error);
      throw error;
    }
  },

  // Withdraw tokens directly without involving shares
  async withdrawTokens(amount, tokenAddress) {
    if (!amount || !tokenAddress) {
      throw new Error(
        "Amount and token address are required to withdraw tokens."
      );
    }
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "withdrawTokens",
        args: [amount, tokenAddress],
      });
      return tx;
    } catch (error) {
      console.error("Error withdrawing tokens:", error);
      throw error;
    }
  },

  // Create a borrow request
  async createBorrowRequest(
    tokenAddress,
    principal,
    endTimestamp,
    borrower,
    mongoId
  ) {
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "createBorrowRequest",
        args: [tokenAddress, principal, endTimestamp, borrower, mongoId],
      });
      return tx;
    } catch (error) {
      console.error("Error creating borrow request:", error);
      throw error;
    }
  },

  // Log a vote for a loan request
  async logVote(loanId, amount,staker) {
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "logVote",
        args: [loanId, staker, amount],
      });
      return tx;
    } catch (error) {
      console.error("Error logging vote:", error);
      throw error;
    }
  },

  // Repay an active loan
  async repayLoan(loanId) {
    try {
      const tx = await writeContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "repayLoan",
        args: [loanId],
      });
      return tx;
    } catch (error) {
      console.error("Error repaying loan:", error);
      throw error;
    }
  },

  // Read loan details
  async getLoanDetails(loanId) {
    try {
      const loanDetails = await readContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "loans",
        args: [loanId],
      });
      return loanDetails;
    } catch (error) {
      console.error("Error fetching loan details:", error);
      throw error;
    }
  },

  // Get the allowed tokens
  async getAllowedTokens() {
    try {
      const allowedTokens = await readContract(config,{
        address: lendContract.address,
        abi: lendContract.abi,
        functionName: "allowedTokens",
        args: [],
      });
      return allowedTokens;
    } catch (error) {
      console.error("Error fetching allowed tokens:", error);
      throw error;
    }
  },
};

export default LendService;
