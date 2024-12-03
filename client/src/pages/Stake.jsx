import React from "react";
import { Helmet } from "react-helmet";
import MySidebar from "../components/MySidebar";
import { Header } from "components";
import StakeService from "../services/StakeService.js";
import UserService from "../services/UserService";
import UsdcService from "../services/UsdcService";
import LendService from "services/LendService";
import { useState } from "react";
import { useAccount } from "wagmi";
import { lendContract, stakeContract } from "../contracts/config";
import {CONTRACT_ADDRESSES} from "../contracts/config.js"
import { parseUnits } from "ethers";

export default function Stake() {
  const [amount, setAmount] = useState("");
  const [unstakeAmount, setUnstakeAmount] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [fetchedRole, setFetchedRole] = useState(null);
  const [lendAmount, setLendAmount] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [loanDetails, setLoanDetails] = useState(null);
  

  const [borrowToken, setBorrowToken] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [borrowDuration, setBorrowDuration] = useState("");
  const [mongoId, setMongoId] = useState("");

  // State variables for voting
  const [loanId, setLoanId] = useState("");
  const [voteAmount, setVoteAmount] = useState("");

  const [repayLoanId, setRepayLoanId] = useState("");

  const { address: account } = useAccount();
  console.log("address is----->", account);

  const handleCreateUser = async () => {
    try {
      const tx = await UserService?.createUser();
      await tx.wait();
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  const handleGetRole = async () => {
    try {
      const data = await UserService?.fetchUserRole(account);
      console.log("data is---->", data);
      const roleString = ["None", "Lender", "Borrower", "Staker"][data];
      setFetchedRole(roleString);
    } catch (error) {
      console.error("Error fetching user role:", error);
      alert("Failed to fetch user role.");
    }
  };

  const handleSetRole = async () => {
    try {
      if (!["1", "2", "3"].includes(role)) {
        alert("Invalid role. Use 1 for Lender, 2 for Borrower, 3 for Staker.");
        return;
      }
      const tx = await UserService?.setUserRole(address, parseInt(role));
      // await tx.wait();
      alert("Role updated successfully!");
    } catch (error) {
      console.error("Error setting user role:", error);
      alert("Failed to update role.");
    }
  };

  const handleStakeTokens = async () => {
    try {
      if (!account) {
        alert("Please connect your wallet first.");
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
      alert("Tokens staked successfully!");
    } catch (error) {
      console.error("Error staking tokens:", error);
      alert("Failed to stake tokens.");
    }
  };
  const handleUnstakeTokens = async () => {
    try {
      if (!account) {
        alert("Please connect your wallet first.");
        return;
      }

      const amountToUnstake = parseUnits(unstakeAmount, 18); // Assuming 6 decimals for USDC

      const tx = await StakeService.unstakeTokens(amountToUnstake);
      console.log("Stake Transaction:", tx);
      alert("Tokens staked successfully!");
    } catch (error) {
      console.error("Error staking tokens:", error);
      alert("Failed to stake tokens.");
    }
  };

  const handleLendTokens = async () => {
    try {
      const amountToStake = parseUnits(lendAmount, 18); // Assuming 6 decimals for USDC
      const allowance = await UsdcService.getAllowance(
        account,
        lendContract?.address
      );

      if (BigInt(allowance) < BigInt(amountToStake)) {
        console.log("Allowance too low. Approving USDC...");
        await UsdcService.approve(
          tokenAddress,
          lendContract?.address,
          amountToStake
        );
      }

      const tx = await LendService.lendTokens(
        amountToStake,
        tokenAddress,
        account
      );
      console.log("Lend Tokens Transaction:", tx);
      alert("Tokens Lent Successfully!");
    } catch (error) {
      console.error(error);
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
   const handleBorrowRequest = async () => {
     try {

       console.log("borrow token is------>",borrowToken)

       const durationInSeconds = borrowDuration * 24 * 60 * 60; // Days to seconds
       const tx = await LendService.createBorrowRequest(
         borrowToken,
         borrowAmount,
         durationInSeconds,
         account,
         mongoId
       );
       alert(`Borrow request created! TX: ${tx.hash}`);
     } catch (err) {
       console.error("Borrow request error:", err);
       alert("Failed to create borrow request.");
     }
   };
    const handleVote = async () => {
      try {
        const tx = await LendService.logVote(loanId, voteAmount, account);
        alert(`Vote logged successfully! TX: ${tx.hash}`);
      } catch (err) {
        console.error("Vote error:", err);
        alert("Failed to log vote.");
      }
    };

    const handleRepayLoan = async () => {
      try {
        const tx = await LendService.repayLoan(repayLoanId, account);
        alert(`Loan repaid successfully! TX: ${tx.hash}`);
      } catch (err) {
        console.error("Repay loan error:", err);
        alert("Failed to repay loan.");
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
            <div className="max-w-xl w-1/3 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
              <span className="inline-block align-middle mt-2 mr-8">
                <h1 className="text-xl font-bold mb-2">Stake RUP </h1>
                <span className="text-sm">
                  Staking RUP helps in ensuring quality loans are approved, and
                  stakers get to verify them to secure the network.
                </span>
              </span>
            </div>
            <div className="max-w-xl w-1/3 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
              <span className="inline-block align-middle mt-2 mr-8">
                <h1 className="text-xl font-bold mb-6">RUP Staked</h1>
                <span className="text-xl">
                  <span className="text-3xl text-indigo-600">12 </span>
                  RUP
                </span>
              </span>
            </div>
            <div className="max-w-xl w-1/3 px-6 py-4 border-0 rounded relative mb-4 bg-gray-300">
              <span className="inline-block align-middle mt-2 mr-8">
                <h1 className="text-xl font-bold mb-6">Withdrawable RUP</h1>
                <span className="text-xl">
                  <span className="text-3xl text-indigo-600">12 </span>
                  RUP
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
                <button onClick={handleStakeTokens}>Stake Tokens</button>
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
                <button onClick={handleUnstakeTokens}>Unstake Tokens</button>
              </div>
            </div>
          </div>
          <div>
            <h1>User Contract Interaction</h1>

            {/* Create User */}
            <div style={{ marginBottom: "20px" }}>
              <h3>Create User</h3>
              <button onClick={handleCreateUser}>Create User</button>
            </div>

            {/* Get User Role */}
            <div style={{ marginBottom: "20px" }}>
              <h3>Get User Role</h3>
              <input
                type="text"
                placeholder="Enter user address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <button onClick={handleGetRole}>Get Role</button>
              {fetchedRole && <p>User Role: {fetchedRole}</p>}
            </div>

            {/* Set User Role */}
            <div>
              <h3>Set User Role</h3>
              <input
                type="text"
                placeholder="Enter user address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <input
                type="text"
                placeholder="Enter role (1: Lender, 2: Borrower, 3: Staker)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
              <button onClick={handleSetRole}>Set Role</button>
            </div>
          </div>

          <div style={{ padding: "20px" }}>
            <h1>Lend Protocol</h1>

            <section>
              <h2>Lend Tokens</h2>
              <input
                type="text"
                placeholder="Amount"
                value={lendAmount}
                onChange={(e) => setLendAmount(e.target.value)}
              />
              <input
                type="text"
                placeholder="Token Address"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
              />
              <button onClick={handleLendTokens}>Lend Tokens</button>
            </section>

            <section>
              <h2>Get Loan Details</h2>
              <input
                type="text"
                placeholder="Loan ID"
                value={loanId}
                onChange={(e) => setLoanId(e.target.value)}
              />
              <button onClick={handleGetLoanDetails}>Fetch Loan Details</button>
              {loanDetails && (
                <div>
                  <h3>Loan Details:</h3>
                  <p>Token: {loanDetails.token}</p>
                  <p>Principal: {loanDetails.principal}</p>
                  <p>Rate: {loanDetails.rateInBasisPoints}</p>
                </div>
              )}
            </section>
          </div>

          <div>
            <h2>Borrow Request</h2>
            <input
              type="text"
              placeholder="Token Address"
              value={borrowToken}
              onChange={(e) => setBorrowToken(e.target.value)}
            />
            <input
              type="number"
              placeholder="Amount"
              value={borrowAmount}
              onChange={(e) => setBorrowAmount(e.target.value)}
            />
            <input
              type="number"
              placeholder="Duration (in days)"
              value={borrowDuration}
              onChange={(e) => setBorrowDuration(e.target.value)}
            />
            <input
              type="text"
              placeholder="Mongo ID"
              value={mongoId}
              onChange={(e) => setMongoId(e.target.value)}
            />
            <button onClick={handleBorrowRequest}>Request Borrow</button>
          </div>
          <hr />
          <div>
            <h2>Vote on Loan</h2>
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
            <button onClick={handleVote}>Vote</button>
          </div>
          <hr />
          <div>
            <h2>Repay Loan</h2>
            <input
              type="number"
              placeholder="Loan ID"
              value={repayLoanId}
              onChange={(e) => setRepayLoanId(e.target.value)}
            />
            <button onClick={handleRepayLoan}>Repay Loan</button>
          </div>
        </div>
      </div>
    </>
  );
}
