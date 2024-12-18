import React from "react";
import { Helmet } from "react-helmet";
import MySidebar from "../components/MySidebar";
import { Header, Button } from "components";

import StakeService from "../services/StakeService.js";
import UsdcService from "../services/UsdcService";
import LendService from "services/LendService";
import { useState } from "react";
import { useAccount } from "wagmi";
import { stakeContract } from "../contracts/config";
import { CONTRACT_ADDRESSES } from "../contracts/config.js";
import { parseUnits } from "ethers";
import toast from "react-hot-toast";

export default function Stake() {
  const [amount, setAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");

  const [loanDetails, setLoanDetails] = useState(null);

  // State variables for voting
  const [loanId, setLoanId] = useState("");
  const [voteAmount, setVoteAmount] = useState("");

  const { address: account } = useAccount();
  console.log("address is----->", account);

  const handleStakeTokens = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet first.");
        return;
      }

      const amountToStake = parseUnits(amount, 18); // Assuming 6 decimals for USDC
      const allowance = await UsdcService.getAllowance(
        account,
        stakeContract?.address
      );

      if (BigInt(allowance) < BigInt(amountToStake)) {
        console.log("Allowance too low. Approving USDC...");
        await UsdcService.approve(
          CONTRACT_ADDRESSES.USDC,
          stakeContract?.address,
          amountToStake
        );
      }
      const tx = await StakeService.stakeTokens(amountToStake, account);
      console.log("Stake Transaction:", tx);
      toast.success("Tokens staked successfully!");
    } catch (error) {
      console.error("Error staking tokens:", error);
      toast.error("Failed to stake tokens.");
    }
  };
  const handleUnstakeTokens = async () => {
    try {
      if (!account) {
        toast.error("Please connect your wallet first.");
        return;
      }

      const amountToUnstake = parseUnits(unstakeAmount, 18); // Assuming 6 decimals for USDC

      const tx = await StakeService.unstakeTokens(amountToUnstake);
      console.log("Stake Transaction:", tx);
      toast.success("Tokens staked successfully!");
    } catch (error) {
      console.error("Error staking tokens:", error);
      toast.error("Failed to stake tokens.");
    }
  };

  const handleGetLoanDetails = async () => {
    try {
      const details = await LendService.getLoanDetails(loanId);
      setLoanDetails(details);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVote = async () => {
    try {
      const tx = await LendService.logVote(loanId, voteAmount, account);
      toast.success(`Vote logged successfully! TX: ${tx.hash}`);
    } catch (err) {
      console.error("Vote error:", err);
      toast.error("Failed to log vote.");
    }
  };

  return (
    <>
      <Helmet>
        <title>AgroFinance</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
        <MySidebar className="w-[252px] h-screen top-0 bg-white-A700 !sticky" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]  mb-8">
          <Header title="Stake" />

          <div className="flex w-10/12 gap-4">
            <div className="w-full x-6 p-4 border-0 rounded relative mb-4 bg-gray-300">
              <span className="inline-block align-middle mt-2 mr-8">
                <h1 className="text-xl font-bold mb-2">
                  <i className="fa-solid fa-circle-info" /> Staking
                </h1>
                <span className="text-md">
                  Staking helps in ensuring quality loans are approved, and
                  stakers get to verify them to secure the network.
                </span>
              </span>
            </div>
          </div>
          <div className="max-w-xl w-1/2 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
            <h1 className="text-xl font-bold mb-6">Stake</h1>
            <div className="flex gap-4 align-middle mt-2 mr-8">
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Stake
                </label>
                <input
                  type="number"
                  placeholder="Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
                <Button
                  shape="round"
                  className="w-full mt-2"
                  onClick={handleStakeTokens}
                >
                  Stake Tokens
                </Button>
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Unstake
                </label>
                <input
                  className="text-gray-700 border bg-gray-50 rounded py-2 px-4 "
                  type="number"
                  placeholder="Enter Amount"
                  value={unstakeAmount}
                  onChange={(e) => setUnstakeAmount(e.target.value)}
                />
                <Button
                  shape="round"
                  className="w-full mt-2"
                  onClick={handleUnstakeTokens}
                >
                  Unstake Tokens
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-xl w-1/2 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
            <h1 className="text-xl font-bold mb-6">Get Loan Details</h1>
            <div className="flex gap-4 align-middle mt-2 mr-8">
                <input
                  type="text"
                  className="w-full"
                  placeholder="Loan ID"
                  value={loanId}
                  onChange={(e) => setLoanId(e.target.value)}
                />
                <Button shape="round" className="w-1/3 mt" onClick={handleGetLoanDetails}>
                  Get Details
                </Button>
                {loanDetails && (
                  <div>
                    <h3>Loan Details:</h3>
                    <p>Token: {loanDetails.token}</p>
                    <p>Principal: {loanDetails.principal}</p>
                    <p>Rate: {loanDetails.rateInBasisPoints}</p>
                  </div>
                )}
            </div>
          </div>

          <div className="max-w-xl w-1/2 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
            <h1 className="text-xl font-bold mb-6">Vote On Loan</h1>
            <div className="flex flex-col gap-4 align-middle mt-2 mr-8">
            <input
              type="number"
              placeholder="Loan ID"
              value={loanId}
              onChange={(e) => setLoanId(e.target.value)}
            />
            <input
              type="number"
              placeholder="Vote Amount (AGC)"
              value={voteAmount}
              onChange={(e) => setVoteAmount(e.target.value)}
            />
            <Button shape="round" className="w-1/3 " onClick={handleVote}>
              Vote
            </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
