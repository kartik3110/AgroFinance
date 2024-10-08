import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Img } from ".";

export default function MySidebar({ ...props }) {
  const location = useLocation();

  // Function to check if the current route matches the link
  const activeCss = (path) => {
    return location.pathname === path
      ? "text-[#314ca3] italic"
      : "text-[#888ea2]";
  };

  return (
    <div className="h-screen w-[252px] bg-white-A700 sticky top-0" {...props}>
      <Link to="/">
        <Img
          src="images/img_logo.png"
          alt="logo_one"
          className="w-[65%] md:h-auto sm:w-full mt-[30px] mx-auto object-cover"
        />
      </Link>
      <div className="flex flex-col justify-start w-full mt-[50px] mb-[364px]">
        <Link to="/dashboard">
          <div
            className={`flex items-center p-[17px] gap-[20px] text-[18px] font-medium ${activeCss(
              "/dashboard"
            )} hover:text-[#314ca3]`}
          >
            <Img
              src="images/img_vector.svg"
              alt="vector_one"
              className="h-[25px] w-[25px]"
            />
            Dashboard
          </div>
        </Link>

        <Link to="/borrow">
          <div
            className={`flex items-center p-[17px] gap-[20px] text-[18px] font-medium ${activeCss(
              "/borrow"
            )} hover:text-[#314ca3]`}
          >
            <Img
              src="images/img_group.svg"
              alt="borrow_one"
              className="h-[25px] w-[25px]"
            />
            Borrow
          </div>
        </Link>

        <Link to="/loan">
          <div
            className={`flex items-center p-[17px] gap-[20px] text-[18px] font-medium ${activeCss(
              "/loan"
            )} hover:text-[#314ca3]`}
          >
            <Img
              src="images/img_loan_1.svg"
              alt="loan_one"
              className="h-[25px] w-[25px]"
            />
            Lend a Loan
          </div>
        </Link>

        <Link to="/stake">
          <div
            className={`flex items-center p-[17px] gap-[20px] text-[18px] font-medium ${activeCss(
              "/stake"
            )} hover:text-[#314ca3]`}
          >
            <Img
              src="images/img_service_1.svg"
              alt="service_one"
              className="h-[25px] w-[25px]"
            />
            Stake
          </div>
        </Link>

        <Link to="/profile">
          <div
            className={`flex items-center p-[17px] gap-[20px] text-[18px] font-medium ${activeCss(
              "/profile"
            )} hover:text-[#314ca3]`}
          >
            <Img
              src="images/img_vector_blue_gray_400.svg"
              alt="profile_one"
              className="h-[25px] w-[25px]"
            />
            Profile
          </div>
        </Link>
      </div>
    </div>
  );
}
