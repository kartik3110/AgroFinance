// Contract Addresses

//User contract:0x25c9F84D76ec43138fe3589224Af5bB8703982Bd
//USDC contract:0xb53319D02210F72E55f9e2d39815e436fB7b9FF1
//Lend token:0x2B806059b7Cc42e24266f80ce17Cc9A0153b4f4f
//Stake contract:0x1501265E178753fa23026B42FAd8A96D7dCeCdc3
export const CONTRACT_ADDRESSES = {
  Lend: "0x2B806059b7Cc42e24266f80ce17Cc9A0153b4f4f", // Replace with actual address
  Stake: "0xfc6FEDe27B0C36Ffb21BCEF83051E6503A18729f", // Replace with actual address
  USDC: "0xb53319D02210F72E55f9e2d39815e436fB7b9FF1", // Replace with actual address
  User: "0x25c9F84D76ec43138fe3589224Af5bB8703982Bd", // Replace with actual address
};

// ABI Imports
import LendABI from "./abis/Lend.json"; // Replace with your actual ABI JSON files
import StakeABI from "./abis/Stake.json";
import USDCABI from "./abis/USDC.json";
import UserABI from "./abis/User.json";

// Export contract configurations for wagmi usage
export const lendContract = {
  address: CONTRACT_ADDRESSES.Lend,
  abi: LendABI,
};

export const stakeContract = {
  address: CONTRACT_ADDRESSES.Stake,
  abi: StakeABI,
};

export const usdcContract = {
  address: CONTRACT_ADDRESSES.USDC,
  abi: USDCABI,
};

export const userContract = {
  address: CONTRACT_ADDRESSES.User,
  abi: UserABI,
};
