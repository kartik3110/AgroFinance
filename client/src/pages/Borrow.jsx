import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import MySidebar from "components/MySidebar";
import Header from "components/Header";
// import Modal from "components/Modal";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import { Link } from "react-router-dom";

// function Modal() {
//   return (
//     <div>
//       <button aria-describedby={id} type="button" onClick={handleClick}>
//         Toggle Popper
//       </button>
//       <Popper id={id} open={open} anchorEl={anchorEl}>
//         <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
//           You need to complete KYC first!
//         </Box>
//       </Popper>
//     </div>
//   );
// }

export default function ImgMediaCard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleCreateNewLoan = () => {
    setAnchorEl(anchorEl ? null : true);
  };
  const open = Boolean(anchorEl);
  const id = open ? "simple-popper" : undefined;
  const Modal = (
    <Popper id={id} open={open} anchorEl={anchorEl}>
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
        <Card sx={{ maxWidth: 600, padding: 4 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              You need to complete KYC first!
            </Typography>
          </CardContent>
          <CardActions>
            <Link to="/kyc">
              <Button size="medium" variant="contained">
                Complete KYC
              </Button>
            </Link>
            <Button
              size="medium"
              onClick={handleCreateNewLoan}
              variant="contained"
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
              <Button
                size="medium"
                variant="contained"
                onClick={handleCreateNewLoan}
              >
                New Loan +
              </Button>
              <Button size="medium" variant="contained" color="secondary">
                Repay
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
