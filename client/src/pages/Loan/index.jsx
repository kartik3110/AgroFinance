import React from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Button, Img } from "../../components";
import Header from "../../components/Header";
import { ReactTable } from "../../components/ReactTable";
import Sidebar1 from "../../components/MySidebar";
import { createColumnHelper } from "@tanstack/react-table";

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

export default function LoanPage() {
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
      // table1ColumnHelper.accessor("interestrate", {
      //   cell: (info) => (
      //     <Text as="p" className="text-center !text-blue_gray-900">
      //       {info?.getValue?.()}
      //     </Text>
      //   ),
      //   header: (info) => (
      //     <Text as="p" className="pt-px pb-[11px] !font-medium">
      //       Interest rate
      //     </Text>
      //   ),
      //   meta: { width: "147px" },
      // }),
      // table1ColumnHelper.accessor("installment", {
      //   cell: (info) => (
      //     <Text as="p" className="text-center !text-blue_gray-900">
      //       {info?.getValue?.()}
      //     </Text>
      //   ),
      //   header: (info) => (
      //     <Text as="p" className="pt-px pb-[11px] !font-medium">
      //       Installment
      //     </Text>
      //   ),
      //   meta: { width: "172px" },
      // }),
      // table1ColumnHelper.accessor("repay", {
      //   cell: (info) => (
      //     <div className="text-center h-[30px] md:w-full relative">
      //       <a className=" hover:cursor-pointer">
      //         <Text
      //           size="lg"
      //           as="p"
      //           className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
      //         >
      //           {info?.getValue?.()}
      //         </Text>
      //       </a>
      //     </div>
      //   ),
      //   header: (info) => (
      //     <Text as="p" className="pt-px pb-2.5 !font-medium">
      //       Repay
      //     </Text>
      //   ),
      //   meta: { width: "118px" },
      // }),
    ];
  }, []);

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
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky overflow-auto" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]">
          <Header title="Lend" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-6">
            <div className="flex flex-row md:flex-col w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_user_3_2.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[57%] gap-[7px]">
                  <Text as="p">Total Pool Value</Text>
                  <Heading size="xl" as="h1">
                    $50,000
                  </Heading>
                </div>
              </div>
              {/* <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[21px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px] my-1">
                  <Img src="images/img_briefcase_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[60%] gap-1.5">
                  <Text as="p">Available Pool Value</Text>
                  <Heading size="xl" as="h2">
                    $100,000
                  </Heading>
                </div>
              </div> */}
              <div className="flex flex-row justify-start items-center w-[23%] md:w-full gap-[15px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_graph_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[58%] gap-[7px]">
                  <Text as="p">Liquidity</Text>
                  <Heading size="xl" as="h3">
                    25%
                  </Heading>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-3.5">
              <Heading as="h5">Active Loans Overview</Heading>
              <div className="flex flex-row justify-center w-full p-5 bg-white-A700 rounded-[25px]">
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
