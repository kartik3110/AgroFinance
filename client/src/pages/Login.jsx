import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import ghostImg from "../assets/images/ghost.png";

const Login = () => {
  const navigate = useNavigate();
  const { isConnected } = useAccount(); // Hook to check if wallet is connected

  useEffect(() => {
    if (isConnected) {
      // Navigate to the dashboard on successful connection
      navigate("/dashboard");
    }
  }, [isConnected, navigate]); // Effect runs whenever isConnected or navigate changes

  return (
    <div className="flex bg-gray-100 items-center justify-center h-screen w-full px-5 sm:px-0">
      <div className="flex bg-gray-50 rounded-lg flex-col shadow-lg border overflow-hidden max-w-4xl w-full">
        <img src={ghostImg} alt="" />
        <div className="my-4 mx-auto">
          <ConnectButton />
        </div>
      </div>
    </div>
  );
};

export default Login;
