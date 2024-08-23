import React from "react";
import { CloseSVG } from "../../assets/images";
import { Img, Button, Input, Heading } from "./..";
import { Link } from "react-router-dom";

export default function Header({ ...props }) {
  const [searchBarValue, setSearchBarValue] = React.useState("");

  return (
    <header {...props}>
      <div className="flex flex-row md:flex-col justify-between items-center w-full mx-auto md:gap-10 md:px-5 max-w-[1110px]">
        <Heading size="3xl" as="h3" className="!text-gray-900">
          AgroFinance
        </Heading>
        <div className="flex flex-row sm:flex-col justify-between items-center w-auto sm:gap-10">
          <Button className="mr-4 border rounded-lg">Connect Wallet</Button>
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
