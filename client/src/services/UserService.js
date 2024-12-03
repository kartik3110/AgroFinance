import { userContract } from "../contracts/config";
import { readContract, writeContract } from "@wagmi/core";
import { config } from "App";

// Functions to interact with the User contract
const UserService = {
  async createUser() {
    try {
      const tx = await writeContract(config,{
        ...userContract,
        functionName: "createUser",
      });
      return tx;
    } catch (error) {
      console.error("Error creating user:", error);
      throw error;
    }
  },

  async fetchUserRole(userAddress) {
    try {
        console.log("user address is---->", userAddress);
      console.log("user contract is---->", userContract?.address);

      const result = await readContract(config,{
        address: userContract?.address,
        abi: userContract?.abi,
        functionName: "getUserRole",
        args: [userAddress],
      });
      console.log("result is--->",result);
      return result;
    } catch (error) {
      console.error("Error fetching user role:", error);
      throw error;
    }
  },

  //    enum Role {
  //         None,
  //         Lender,
  //         Borrower,
  //         Staker
  //     }

  async setUserRole(userAddress, role) {
    try {

             console.log("user address is---->", userAddress);
      const tx = await writeContract(config,{
        ...userContract,
        functionName: "setRole",
        args: [userAddress, role],
      });
      return tx;
    } catch (error) {
      console.error("Error setting user role:", error);
      throw error;
    }
  },
};

export default UserService;
