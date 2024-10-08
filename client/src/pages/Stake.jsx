import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";
import Sidebar1 from "../components/MySidebar";

export default function Stake() {
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
        <Sidebar1 className="w-[252px] h-screen top-0 bg-white-A700 !sticky" />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[31px]  mb-8">
          <Header title="Stake" />
          {/* <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-6">
            <div className="flex flex-row md:flex-col w-full gap-[30px]">
              <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_life_insurance_filled.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[52%] gap-2">
                  <Heading size="xl" as="h1" className="!text-indigo-600_01">
                    Life Insurance
                  </Heading>
                  <Text as="p">Unlimited protection</Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_bag_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[44%] gap-1.5">
                  <Heading size="xl" as="h2" className="!text-indigo-600_01">
                    Shopping
                  </Heading>
                  <Text as="p">Buy. Think. Grow.</Text>
                </div>
              </div>
              <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                <Button size="4xl" shape="circle" className="w-[70px]">
                  <Img src="images/img_shield_1.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[45%] gap-1.5">
                  <Heading size="xl" as="h3" className="!text-indigo-600_01">
                    Safety
                  </Heading>
                  <Text as="p">We are your allies</Text>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start w-full gap-[27px]">
              <Heading as="h4">Bank Services List</Heading>
              <div className="flex flex-col w-full gap-5">
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_loan_1_indigo_600_01_60x60.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Business loans
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_briefcase_1.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Checking accounts
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_group_984.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[5px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Savings accounts
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[24%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_user_3_2.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[68%] gap-[7px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Debit and credit cards
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_shield_1_indigo_600_01.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Life Insurance
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col justify-between items-center w-full p-[15px] md:gap-10 bg-white-A700 rounded-[20px]">
                  <div className="flex flex-row justify-start items-center w-[22%] md:w-full gap-5">
                    <Button size="3xl" shape="round" className="w-[60px]">
                      <Img src="images/img_loan_1_indigo_600_01_60x60.svg" />
                    </Button>
                    <div className="flex flex-col items-start justify-start w-[67%] gap-[7px]">
                      <Text as="p" className="!text-blue_gray-900 !font-medium">
                        Business loans
                      </Text>
                      <Text size="lg" as="p">
                        It is a long established{" "}
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[5px]">
                    <Text as="p" className="!text-blue_gray-900 !font-medium">
                      Lorem Ipsum
                    </Text>
                    <Text size="lg" as="p">
                      Many publishing
                    </Text>
                  </div>
                  <div className="h-[35px] w-[14%] md:w-full mr-[15px] relative">
                    <a className=" hover:cursor-pointer">
                      <Text
                        size="lg"
                        as="p"
                        className="left-1/4 top-0 m-auto border-indigo-500 border rounded-xl p-2 !text-indigo-500 text-center !font-medium absolute"
                      >
                        View Details
                      </Text>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
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
                  className="text-gray-700 border bg-gray-50 rounded py-2 px-4 "
                  type="email"
                  placeholder="Enter Amount"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Unstake
                </label>
                <input
                  className="text-gray-700 border bg-gray-50 rounded py-2 px-4 "
                  type="email"
                  placeholder="Enter Amount"
                  required
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
