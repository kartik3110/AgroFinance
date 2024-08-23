import React from "react";

import { MenuItem, Menu, Sidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Text, Img } from "..";

export default function MySidebar({ ...props }) {
  return (
    <Sidebar
      width="252px !important"
      collapsedWidth="80px !important"
      className="h-screen top-0 bg-white-A700 !sticky overflow-auto"
    >
      <Img
        src="images/img_logo.png"
        alt="logo_one"
        className="w-[65%] md:h-auto sm:w-full mt-[30px] mx-auto object-cover"
      />
      <Menu
        menuItemStyles={{
          button: {
            padding: "17px 17px 17px 39px",
            gap: "20px",
            color: "#888ea2",
            fontWeight: 500,
            fontSize: "18px",
            [`&:hover, &.ps-active`]: { color: "#314ca3" },
          },
        }}
        className="flex flex-col items-center justify-start w-full mt-[50px] mb-[364px]"
      >
        <Link to="/">
          <MenuItem
            icon={
              <Img
                src="images/img_vector.svg"
                alt="vector_one"
                className="h-[25px] w-[25px]"
              />
            }
          >
            Dashboard
          </MenuItem>
        </Link>
        {/* <MenuItem
        icon={
          <Img
            src="images/img_glyph.svg"
            alt="glyph_one"
            className="h-[25px] w-[25px]"
          />
        }
      >
        Transactions
      </MenuItem> */}
        {/* <MenuItem
        icon={
          <Img
            src="images/img_user_3_1.svg"
            alt="user3one_one"
            className="h-[25px] w-[25px]"
          />
        }
      >
        Accounts
      </MenuItem> */}
        <Link to="/borrow" className="ps-active">
          <MenuItem
            className="ps-active"
            icon={
              <Img
                src="images/img_group.svg"
                alt="image"
                className="h-[25px] w-[25px] ps-active"
              />
            }
          >
            Borrow
          </MenuItem>
        </Link>
        {/* <MenuItem
        icon={
          <Img
            src="images/img_credit_card_1.svg"
            alt="creditcardone"
            className="h-[25px] w-[25px]"
          />
        }
      >
        Credit Cards
      </MenuItem> */}
        <Link to="/loan">
          <MenuItem
            icon={
              <Img
                src="images/img_loan_1.svg"
                alt="loanone_one"
                className="h-[25px] w-[25px]"
              />
            }
          >
            Lend a Loan
          </MenuItem>
        </Link>
        <Link to="/services">
          <MenuItem
            icon={
              <Img
                src="images/img_service_1.svg"
                alt="serviceone_one"
                className="h-[25px] w-[25px]"
              />
            }
          >
            Stake
          </MenuItem>
        </Link>
        {/* <MenuItem
        icon={
          <Img
            src="images/img_econometrics_1.svg"
            alt="econometricsone"
            className="h-[25px] w-[25px]"
          />
        }
      >
        My Privileges
      </MenuItem> */}
        <Link to="/profile">
          <MenuItem
            icon={
              <Img
                src="images/img_vector_blue_gray_400.svg"
                alt="vector_three"
                className="h-[25px] w-[25px]"
              />
            }
          >
            Profile
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  );
}
