import React from "react";
import { Helmet } from "react-helmet";
import { Text, Img, Heading, Button, Header } from "../../components";
import MySidebar from "../../components/MySidebar";
import { useState } from "react";
import UserService from "services/UserService";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";

export default function MainDashboardPage() {
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");
  const [fetchedRole, setFetchedRole] = useState(null);
  const { address: account } = useAccount();

  const handleCreateUser = async () => {
    try {
      const tx = await UserService?.createUser();
      await tx.wait();
      toast.success("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error(`Failed to create user: ${error.message}`);
    }
  };

  const handleGetRole = async () => {
    try {
      const data = await UserService?.fetchUserRole(account);
      console.log("data is---->", data);
      const roleString = ["None", "Lender", "Borrower", "Staker"][data];
      setFetchedRole(roleString);
    } catch (error) {
      console.error("Error fetching user role:", error);
      toast.error("Failed to fetch user role.");
    }
  };

  const handleSetRole = async () => {
    try {
      if (!["1", "2", "3"].includes(role)) {
        toast.error(
          "Invalid role. Use 1 for Lender, 2 for Borrower, 3 for Staker."
        );
        return;
      }
      const tx = await UserService?.setUserRole(address, parseInt(role));
      // await tx.wait();
      toast.success("Role updated successfully!");
    } catch (error) {
      console.error("Error setting user role:", error);
      toast.error("Failed to update role.");
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
      <div className="flex flex-row md:flex-col justify-center items-start w-full pb-[30px] md:gap-5 sm:pb-5 bg-gray-100">
        <MySidebar />
        <div className="flex flex-col items-center justify-start w-[83%] md:w-full gap-[25px]">
          <Header title="Dashboard" />
          <div className="flex flex-col items-center justify-start w-[94%] md:w-full gap-[25px]">
            <section className="my-4 flex flex-col gap-4 justify-start w-full">
              {/* Create User */}
             <div className="p-4 bg-gray-300 rounded w-1/2 mb-8">
             <h3>
                <span className="text-2xl font-semibold">New here?</span>
                <br />
                Note: upon registration, default role is lender.
              </h3>
              <Button
                className="mt-4 w-full"
                shape="round"
                onClick={handleCreateUser}
              >
                Register Now!
              </Button>
             </div>
              {/* Get User Role */}
              <h3 className="font-bold text-lg">Get User Role</h3>
              <input
                type="text"
                className="w-1/2"
                placeholder="Enter user address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <Button
                shape="round"
                className="w-1/2 mb-8"
                onClick={handleGetRole}
              >
                Get Role
              </Button>
              {fetchedRole && (
                <p className="text-xl -mt-6 mb-4">
                  <span className="font-semibold">User Role:</span> {fetchedRole}
                </p>
              )}
              {/* Set User Role */}
              <div className="flex flex-col gap-2 p-4 bg-gray-300 rounded w-1/2">
                <h3 className="font-bold text-lg">Set User Role</h3>
                <input
                  type="text"
                  placeholder="Enter user address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Enter role (1: Lender, 2: Borrower, 3: Staker)"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                />
                <Button
                  shape="round"
                  className="mb-8"
                  onClick={handleSetRole}
                >
                  Set Role
                </Button>
              </div>
            </section>

            {/* <div className="flex flex-row md:flex-col justify-start items-center w-full gap-[30px] md:gap-5">
              <div className="flex flex-row justify-start w-[66%] md:w-full">
                <div className="flex flex-col items-center justify-start w-full gap-[17px]">
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
            </div> */}

            {/* pending requests */}
            {/* <Heading as="h4">Pending Requests</Heading> */}
            {/* <div className="flex flex-col w-full gap-[15px]">
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
             </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
