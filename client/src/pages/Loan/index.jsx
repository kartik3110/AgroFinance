  import React from "react";
  import { Helmet } from "react-helmet";
  import { Text, Heading, Button, Img, Header } from "../../components";
  import UsdcService from "../../services/UsdcService";
  import LendService from "../../services/LendService";
  import { ReactTable } from "../../components/ReactTable";
  import MySidebar from "../../components/MySidebar";
  import { createColumnHelper } from "@tanstack/react-table";
  import { useState } from "react";
import { lendContract } from "contracts/config";
import { parseUnits } from "ethers";
import { useAccount } from "wagmi";
import toast from "react-hot-toast";

  const table1Data = [
    {
      slno: "01.",
      loanmoney: "$1,000",
      lefttorepay: "$1,000",
      address: "0x173537E....f04F25490",
    },
    {
      slno: "02.",
      loanmoney: "$500",
      lefttorepay: "$500",
      address: "0x1hh537E....f04F25490",
    },
    {
      slno: "03.",
      loanmoney: "$900",
      lefttorepay: "$900",
      address: "0x173657E....f04F25490",
    },
    {
      slno: "04.",
      loanmoney: "$500",
      lefttorepay: "$500",
      address: "0x1735366....f04F25490",
    },
    {
      slno: "05.",
      loanmoney: "$600",
      lefttorepay: "$600",
      address: "0x173887E....f04F25490",
    },
    {
      slno: "06.",
      loanmoney: "$800",
      lefttorepay: "$800",
      address: "0x173587E....f04F25490",
    },
    {
      slno: "07.",
      loanmoney: "$100",
      lefttorepay: "$100",
      address: "0x173007E....f04F25490",
    },
    {
      slno: "08.",
      loanmoney: "$700",
      lefttorepay: "$700",
      address: "0x173RR7E....f04F25490",
    },
  ];

  export default function Loan() {
    const [lendAmount, setLendAmount] = useState("");
    const [tokenAddress, setTokenAddress] = useState("");
    const { address: account } = useAccount();
    
    const [poolValue, setPoolValue] = useState(0)

    const table1Columns = React.useMemo(() => {
      const table1ColumnHelper = createColumnHelper();
      return [
        table1ColumnHelper.accessor("slno", {
          cell: (info) => (
            <Text as="p" className="text-center !text-blue_gray-900">
              {info?.getValue?.()}
            </Text>
          ),
          header: (info) => (
            <Text as="p" className="pt-px pb-[11px] !font-medium">
              SL No
            </Text>
          ),
          meta: { width: "100px" },
        }),
        table1ColumnHelper.accessor("loanmoney", {
          cell: (info) => (
            <Text as="p" className="text-center !text-blue_gray-900">
              {info?.getValue?.()}
            </Text>
          ),
          header: (info) => (
            <Text as="p" className="pt-px pb-2.5 !font-medium">
              Loan Money
            </Text>
          ),
          meta: { width: "168px" },
        }),
        table1ColumnHelper.accessor("lefttorepay", {
          cell: (info) => (
            <Text as="p" className="text-center !text-blue_gray-900">
              {info?.getValue?.()}
            </Text>
          ),
          header: (info) => (
            <Text as="p" className="pt-px pb-2.5 !font-medium">
              Pool Value
            </Text>
          ),
          meta: { width: "174px" },
        }),
        table1ColumnHelper.accessor("address", {
          cell: (info) => (
            <Text as="p" className="text-center !text-blue_gray-900">
              {info?.getValue?.()}
            </Text>
          ),
          header: (info) => (
            <Text as="p" className="pb-[11px] !font-medium">
              Borrower's Address
            </Text>
          ),
          meta: { width: "171px" },
        }),
      ];
    }, []);

    const getPoolValue = () => {

    }

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
        toast.success("Tokens Lent Successfully!");
      } catch (error) {
        console.error(error);
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
          <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]">
            <Header title="Lend" />
            <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-6">
              <div className="flex flex-row md:flex-col w-full gap-[30px]">
                <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-gray-50 rounded-[25px]">
                  <Button
                    size="4xl"
                    color="gray"
                    shape="circle"
                    className="w-[70px]"
                  >
                    <Img src="images/img_user_3_2.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[57%] gap-[7px]">
                    <Text as="p">Total Pool Value</Text>
                    <Heading size="xl" as="h1">
                      0.8 AGC
                    </Heading>
                  </div>
                </div>
                {/* liquidity */}
                {/* <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-gray-50 rounded-[25px]">
                  <Button
                    color="gray"
                    size="4xl"
                    shape="circle"
                    className="w-[70px]"
                  >
                    <Img src="images/img_graph_1.svg" />
                  </Button>
                  <div className="flex flex-col items-start justify-start w-[58%] gap-[7px]">
                    <Text as="p">Liquidity</Text>
                    <Heading size="xl" as="h3">
                      25%
                    </Heading>
                  </div>
                </div> */}
              </div>

              <section className="my-4 flex flex-col gap-4 justify-start w-1/2 mr-auto bg-gray-300 p-6 rounded">
              <Heading as="h5">Lend Tokens</Heading>
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
                <Button shape="round" onClick={handleLendTokens}>
                  Lend Tokens
                </Button>
              </section>

              <div className="flex flex-col items-start justify-start w-full gap-3.5">
                <Heading as="h5">Active Loans Overview</Heading>
                <div className="flex flex-row justify-center w-full p-5 bg-gray-50 rounded-[25px]">
                  <ReactTable
                    size="xs"
                    bodyProps={{ className: "md:flex-col" }}
                    headerProps={{ className: "md:flex-col md:gap-5" }}
                    rowDataProps={{ className: "md:flex-col md:gap-5" }}
                    className="w-[1050px] mx-[9px]"
                    columns={table1Columns}
                    data={table1Data}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
