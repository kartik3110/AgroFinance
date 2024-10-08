import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button } from "../../components";
import Header from "../../components/Header";
import MySidebar from "components/MySidebar";

export default function MainDashboardPage() {
  const [sliderState, setSliderState] = React.useState(0);
  const sliderRef = React.useRef(null);

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
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <Button
                        size="xl"
                        color="white"
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
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <Button
                        size="xl"
                        color="white"
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
                    <div className="flex flex-row justify-start items-center w-[32%] md:w-full gap-[22px] p-[25px] sm:p-5 bg-white-A700 rounded-[25px]">
                      <Button
                        size="xl"
                        color="white"
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
            <div className="flex flex-row md:flex-col justify-start w-full gap-[30px] md:gap-5">
              {/* weekly activity */}
              {/* <div className="flex flex-col items-start justify-start w-[66%] md:w-full gap-[15px]">
                <Heading as="h4">Weekly Activity</Heading>
                <div className="flex flex-row justify-center w-full p-[26px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="flex flex-col items-end justify-start w-[99%] ml-1.5 mr-[3px] gap-5">
                    <div className="flex flex-row justify-start w-[30%] md:w-full gap-[30px]">
                      <div className="flex flex-row justify-start items-center w-[38%] gap-2.5">
                        <div className="h-[15px] w-[15px] bg-indigo-200 rounded-[7px]" />
                        <Text size="lg" as="p">
                          Diposit
                        </Text>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[47%] gap-2.5">
                        <div className="h-[15px] w-[15px] bg-indigo-600_01 rounded-[7px]" />
                        <Text size="lg" as="p">
                          Withdraw
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-full">
                      <div className="flex flex-col items-end justify-start w-full gap-2">
                        <div className="flex flex-row md:flex-col justify-start items-center w-full gap-2.5 md:gap-5">
                          <div className="flex flex-col items-center justify-start w-[4%] md:w-full gap-[21px]">
                            <Text size="s" as="p" className="text-right">
                              500
                            </Text>
                            <Text size="s" as="p" className="text-right">
                              400
                            </Text>
                            <Text size="s" as="p" className="text-right">
                              300
                            </Text>
                            <Text size="s" as="p" className="text-right">
                              200
                            </Text>
                            <Text size="s" as="p" className="text-right">
                              100
                            </Text>
                            <Text size="s" as="p" className="text-right">
                              0
                            </Text>
                          </div>
                          <Img
                            src="images/img_group_899.svg"
                            alt="image_one"
                            className="h-[186px]"
                          />
                        </div>
                        <div className="flex flex-row justify-between w-[84%] md:w-full mr-[37px] sm:mr-5">
                          <Text size="s" as="p" className="text-center">
                            Sat
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            Sun
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            Mon
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            Tue
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            Wed
                          </Text>
                          <Text size="s" as="p" className="text-center">
                            Thu
                          </Text>
                          <Text
                            size="s"
                            as="p"
                            className="h-[16px] text-center"
                          >
                            Fri
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* expense statistics */}
              {/* <div className="flex flex-col items-start justify-start w-[32%] md:w-full gap-[15px]">
                <Heading as="h5">Expense Statistics</Heading>
                <div className="flex flex-row justify-center w-full p-[31px] sm:p-5 bg-white-A700 rounded-[25px]">
                  <div className="h-[259px] w-[94%] sm:w-full mx-[9px] relative">
                    <div className="flex flex-col items-center justify-start h-[119px] w-[119px] bottom-0 right-[12%] m-auto absolute">
                      <div className="flex flex-col items-center justify-start h-[119px] w-[119px] p-[23px] sm:p-5 bg-indigo-200">
                        <Text
                          size="s"
                          as="p"
                          className="flex w-[66%] mb-[33px] !text-white-A700 text-center !font-medium leading-[18px]"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              35%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">
                            Others
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-end w-[54%] right-0 top-[11%] m-auto absolute">
                      <div className="h-[102px] w-full sm:w-full relative">
                        <Img
                          src="images/img_vector_indigo_500.svg"
                          alt="vector_five"
                          className="justify-center h-[102px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[58%] bottom-[7%] right-[19%] m-auto !text-white-A700 text-center !font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              15%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">
                            Bill Expense
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[41%] bottom-[4%] left-0 m-auto absolute">
                      <div className="h-[189px] w-full relative">
                        <Img
                          src="images/img_vector_indigo_100.svg"
                          alt="vector_seven"
                          className="justify-center h-[189px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="justify-center w-max h-max left-0 bottom-0 right-0 top-0 m-auto !text-white-A700 text-center !font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              20%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">
                            Investment
                          </span>
                        </Text>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-[69%] left-[7%] top-0 m-auto absolute">
                      <div className="h-[129px] w-full sm:w-full relative">
                        <Img
                          src="images/img_vector_indigo_600_01_129x185.svg"
                          alt="vector_nine"
                          className="justify-center h-[129px] left-0 bottom-0 right-0 top-0 m-auto absolute"
                        />
                        <Text
                          size="s"
                          as="p"
                          className="w-[55%] top-[26%] right-0 left-0 m-auto !text-white-A700 text-center !font-medium leading-[18px] absolute"
                        >
                          <span className="text-white-A700 text-base font-bold">
                            <>
                              30%
                              <br />
                            </>
                          </span>
                          <span className="text-white-A700 font-bold">
                            Entertainment
                          </span>
                        </Text>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>

            {/* pending requests */}
            <Heading as="h4">Pending Requests</Heading>
            <div className="flex flex-col w-full gap-[15px]">
              <div className="flex flex-row sm:flex-col justify-start items-center w-full p-[15px] sm:gap-5 bg-white-A700 rounded-[20px]">
                <Button
                  size="3xl"
                  shape="round"
                  color="white"
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
                  <Text as="p" className="!font-medium">
                    <button>✅</button>
                    <button>❌</button>
                  </Text>
                  <Text size="lg" as="p">
                    Approve Reject
                  </Text>
                </div>
              </div>
              {/* next loan */}
              <div className="flex flex-row sm:flex-col justify-start items-center w-full p-[15px] sm:gap-5 bg-white-A700 rounded-[20px]">
                <Button
                  size="3xl"
                  color="white"
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
                  <Text as="p" className="!font-medium">
                    <button>✅</button>
                    <button>❌</button>
                  </Text>
                  <Text size="lg" as="p">
                    Approve Reject
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
