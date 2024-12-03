import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Header } from "../../components";
import MySidebar from "../../components/MySidebar";

export default function MainDashboardPage() {
  return (
    <>
      <Helmet>
        <title>AgroFinance</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <div className="flex flex-row md:flex-col justify-center items-start w-full pb-[30px] md:gap-5 sm:pb-5 bg-gray-100">
        <MySidebar />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[25px]">
          <Header title="Dashboard" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[25px]">
            <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-row justify-start w-[66%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[17px]">
                  {/* <div className="flex flex-row justify-between items-start w-full">
                    <Heading as="h1">My Cards</Heading>
                    <a href="#">
                      <Heading size="md" as="h2" className="text-right">
                        See All
                      </Heading>
                    </a>
                  </div> */}

                  <div className="flex flex-row md:flex-col w-full gap-[10px]">
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-gray-50 rounded-[25px]">
                      <Button
                        size="xl"
                        color="gray"
                        shape="circle"
                        className="w-[70px]"
                      >
                        <Img src="images/img_life_insurance_filled.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[52%] gap-2">
                        <Heading
                          size="xl"
                          as="h1"
                          className="!text-indigo-600_01"
                        >
                          Total Requests
                        </Heading>
                        <Text as="p">200</Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-gray-50 rounded-[25px]">
                      <Button
                        size="xl"
                        color="gray"
                        shape="circle"
                        className="w-[70px]"
                      >
                        <Img src="images/img_life_insurance_filled.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[52%] gap-2">
                        <Heading
                          size="xl"
                          as="h1"
                          className="!text-indigo-600_01"
                        >
                          Approved Requests
                        </Heading>
                        <Text as="p">200</Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-gray-50 rounded-[25px]">
                      <Button
                        size="xl"
                        color="gray"
                        shape="circle"
                        className="w-[70px]"
                      >
                        <Img src="images/img_life_insurance_filled.svg" />
                      </Button>
                      <div className="flex flex-col items-start justify-start w-[52%] gap-2">
                        <Heading
                          size="xl"
                          as="h1"
                          className="!text-indigo-600_01"
                        >
                          Rejected Requests
                        </Heading>
                        <Text as="p">200</Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* pending requests */}
            <Heading as="h4">Pending Requests</Heading>
            <div className="flex flex-col w-full gap-[15px]">
              <div className="flex flex-row sm:flex-col justify-start items-center w-full p-[15px] sm:gap-5 bg-gray-50 rounded-[20px]">
                <Button
                  size="3xl"
                  shape="round"
                  color="gray"
                  className="w-[60px]"
                >
                  <Img src="images/img_group_245.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[31%] sm:w-full ml-5 gap-[5px] sm:ml-0">
                  <Text as="p" className="!text-blue_gray-900 !font-medium">
                    User ID
                  </Text>
                  <Text size="lg" as="p">
                    34hl13h6lu23498135jh3k
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[21%] sm:w-full ml-14 gap-[5px] md:ml-5">
                  <Text as="p" className="!text-blue_gray-900 !font-medium">
                    $54,000
                  </Text>
                  <Text size="lg" as="p">
                    Loan Amount
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[15%] sm:w-full ml-11 gap-[5px] md:ml-5">
                  <Text as="p" className="!font-medium flex gap-4">
                    <button>Approve✅</button>
                    <button>Reject❌</button>
                  </Text>
                 
                </div>
              </div>
              {/* next loan */}
              <div className="flex flex-row sm:flex-col justify-start items-center w-full p-[15px] sm:gap-5 bg-gray-50 rounded-[20px]">
                <Button
                  size="3xl"
                  color="gray"
                  shape="round"
                  className="w-[60px]"
                >
                  <Img src="images/img_group_875.svg" />
                </Button>
                <div className="flex flex-col items-start justify-start w-[31%] sm:w-full ml-5 gap-[5px] sm:ml-0">
                  <Text as="p" className="!text-blue_gray-900 !font-medium">
                    User ID
                  </Text>
                  <Text size="lg" as="p">
                    k4jh5k234j23h4kjkjhkj23
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[21%] sm:w-full ml-14 gap-[5px] md:ml-5">
                  <Text as="p" className="!text-blue_gray-900 !font-medium">
                    $25,300
                  </Text>
                  <Text size="lg" as="p">
                    Loan Amount
                  </Text>
                </div>
                <div className="flex flex-col items-start justify-start w-[15%] sm:w-full ml-11 gap-[5px] md:ml-5">
                  <Text as="p" className="!font-medium flex gap-4">
                    <button>Approve✅</button>
                    <button>Reject❌</button>
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
