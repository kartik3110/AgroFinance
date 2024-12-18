import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button } from "components";
import Typography from "@mui/material/Typography";
import MySidebar from "../components/MySidebar";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Link } from "react-router-dom";
import { Header } from "components";
import LendService from "services/LendService";
import { useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function Borrow() {
  const { address: account } = useAccount();


  const [borrowToken, setBorrowToken] = useState("");
  const [borrowAmount, setBorrowAmount] = useState("");
  const [borrowDuration, setBorrowDuration] = useState("");
  const [mongoId, setMongoId] = useState("");

  const [repayLoanId, setRepayLoanId] = useState("");

  const [modalState, setModalState] = useState(null);

  const handleBorrowRequest = async () => {
    try {
      console.log("borrow token is------>", borrowToken);

      const durationInSeconds = borrowDuration * 24 * 60 * 60; // Days to seconds
      const tx = await LendService.createBorrowRequest(
        borrowToken,
        borrowAmount,
        durationInSeconds,
        account,
        mongoId
      );
      toast.success(`Borrow request created! TX: ${tx.hash}`);
    } catch (err) {
      console.error("Borrow request error:", err);
      toast.error(`Failed to create borrow request: ${err}`);
    }
  };

  const handleRepayLoan = async () => {
    try {
      const tx = await LendService.repayLoan(repayLoanId, account);
      toast.success(`Loan repaid successfully! TX: ${tx.hash}`);
    } catch (err) {
      console.error("Repay loan error:", err);
      toast.error(`Failed to repay loan: ${err}`);
    }
  };

  const changeModalState = (state) => {
    setModalState(state);
  };
  const open = Boolean(modalState);
  const id = open ? "simple-popper" : undefined;

  // modal
  const Modal = (
    <Popper id={id} open={open} anchorEl={modalState}>
      <Box
        sx={{
          border: 1,
          p: 1,
          bgcolor: "rgba(0,0,0,0.7)", // Semi-opaque white background
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh", // Center vertically
          minWidth: "100vw", // Center horizontally
        }}
      >
        <Card sx={{ width: 600, padding: 4 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              <div className="flex flex-col gap-4">
                {modalState === "new" && (
                  <>
                    <h2 className="font-bold text-3xl text-center">
                      Create New Borrow Request
                    </h2>
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
                  </>
                )}
                {modalState === "repay" && (
                  <>
                    <h2 className="font-bold text-3xl text-center">
                      Repay loan
                    </h2>
                    <input
                      type="number"
                      placeholder="Enter Loan ID"
                      value={repayLoanId}
                      onChange={(e) => setRepayLoanId(e.target.value)}
                    />
                  </>
                )}
              </div>
            </Typography>
          </CardContent>
          <CardActions>
            {modalState === "new" ? (
              <Button shape="round" size="md" onClick={handleBorrowRequest}>
                Create Request
              </Button>
            ) : (
              <Button shape="round" size="md" onClick={handleRepayLoan}>
                Repay
              </Button>
            )}
            <Button
              shape="round"
              size="md"
              onClick={() => changeModalState(null)}
            >
              Close
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Popper>
  );

  return (
    <div className="flex flex-row md:flex-col justify-center items-start w-full pb-[30px] md:gap-5 sm:pb-5 bg-gray-100">
      <MySidebar />
      <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[25px]">
        <Header title="Borrow" />

        <div className="flex w-10/12 gap-4">
            <div className="w-full x-6 p-4 border-0 rounded relative mb-4 bg-gray-300">
              <span className="inline-block align-middle mt-2 mr-8">
                <h1 className="text-xl font-bold mb-2">
                  <i className="fa-solid fa-circle-info" /> Borrowing
                </h1>
                <span className="text-md">
                  Apply to borrow zero-collateral loans! your request must be verified by stakers who help in ensuring quality loans are approved.
                </span>
              </span>
            </div>
          </div>

        <div className="flex place-items-center mx-auto justify-center">
          <Card sx={{ maxWidth: 400, padding: 1 }}>
            <CardMedia
              component="img"
              alt="logo"
              height="100"
              image="/images/login.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Create Borrow Request
              </Typography>
            </CardContent>
            <CardActions>
              <Button shape="round" onClick={() => changeModalState("new")}>
                New Loan +
              </Button>
              <Button shape="round" onClick={() => changeModalState("repay")}>
                Repay Loan
              </Button>
            </CardActions>
          </Card>
          {Modal}
        </div>
      </div>
      <div></div>
    </div>
  );
}
