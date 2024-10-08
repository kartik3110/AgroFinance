import { Header } from "components";
import MySidebar from "../components/MySidebar";

export default function Kyc() {
  return (
    <div className="flex flex-row md:flex-col justify-center items-start w-full md:gap-5 bg-gray-100">
      <MySidebar className="w-[252px] h-screen top-0 bg-white-A700 !sticky" />
      <div className="flex flex-col items-center justify-start w-[83%] md:w-full ">
        <Header title="KYC" />
        <div className="p-8 w-1/2">
          <p className="text-xl text-gray-600 text-center">Complete Your KYC</p>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Adhaar Number
            </label>
            <input
              className="text-gray-700 border border-gray-400 rounded py-2 px-4 block w-full"
              type="number"
              required
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              PAN Number
            </label>
            <input
              className="text-gray-700 border border-gray-400 rounded py-2 px-4 block w-full"
              type="number"
              required
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Income
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-400 rounded py-2 px-4 block w-full"
              type="text"
            />
          </div>
          <div className="mt-4 flex flex-col justify-between">
            <div className="flex justify-between">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Occupation
              </label>
            </div>
            <input
              className="text-gray-700 border border-gray-400 rounded py-2 px-4 block w-full"
              type="text"
            />
          </div>
          <div className="mt-8">
            <button className="bg-blue-700 transition duration-200 text-gray-50 font-bold py-2 px-4 w-full rounded hover:bg-blue-600">
              Submit
            </button>
          </div>
          <a
            href="#"
            className=" flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
          ></a>
        </div>
      </div>
    </div>
  );
}
