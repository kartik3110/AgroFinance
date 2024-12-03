import React from "react";
import { Img, Button, Heading } from ".";
import { Link } from "react-router-dom";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Header({ title = "AgroFinance" }) {
  return (
    <header className="flex justify-center items-center w-full sm:w-full pt-4 pb-[15px] px-5 border-gray-300 border-b border-solid bg-white-A700">
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1110px]">
        <Heading size="3xl" as="h3" className="!text-gray-900">
          {title}
        </Heading>
        <div className="flex flex-row sm:flex-col justify-between items-center w-auto sm:gap-10">
 
          <ConnectButton />
          <Link to="/profile">
            <Img
              src="images/profileAvatar.png"
              alt="circleimage"
              className="h-[45px] w-[45px] md:h-auto rounded-[50%]"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
