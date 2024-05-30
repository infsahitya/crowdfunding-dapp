import { Covid_Img } from "@/assets";
import { Progress } from "@/components/ui/progress";
import { BiInfoCircle } from "react-icons/bi";
import { FaEthereum } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import { TiInfoOutline } from "react-icons/ti";
import { Checkbox } from "@/components/ui/checkbox";

export default function __campaignDetail() {
  return (
    <div className=" w-full relative px-10 py-8">
      <h1 className=" text-xl font-medium text-white mb-4">About Campaign</h1>
      <div className=" w-full relative flex">
        {/* ----------right side------- */}
        <div className=" w-[50%] ">
          {/* -------img-wrapper------- */}
          <div
            className="mb-4 w-full relative rounded-xl inline-block"
            style={{ height: "20em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10 rounded-xl"
              style={{
                backgroundImage:
                  "linear-gradient(180deg,transparent,rgba(0,0,0,.7))",
              }}
            ></div>
            <img
              src={Covid_Img}
              alt="campaign img"
              className=" w-full h-full rounded-xl z-0 object-fill"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <span className="px-4 py-1 bg-primary text-black inline-flex items-center justify-center mb-2 rounded">
                Active
              </span>
              <h2 className="text-4xl font-semibold text-gray-100 leading-tight mb-5">
                Distribution of Covid Vaccine
              </h2>
            </div>
          </div>

          {/* --------description---------- */}
          <div className=" mb-6">
            <h2 className=" text-white text-xl font-medium">Description</h2>
            <p className=" text-gray-300 text-base line-clamp-3">
              Take part in giving reliefs to Covid-19 victims Take part in
              giving reliefs to Covid-19 victims Take part in giving reliefs to
              Covid-19 victims Take part in giving reliefs to Covid-19 victims
              Take part in giving reliefs to Covid-19 victims Take part in
              giving reliefs to Covid-19 victims
            </p>
          </div>

          {/* -------contribution details------- */}
          <div className=" text-gray-300 mb-6">
            <h2 className=" text-white text-xl font-medium mb-3">
              Contribution Details
            </h2>

            <div className=" w-full flex flex-col rounded-lg bg-[#343A40] p-6 py-8">
              <div className=" flex items-center justify-between mb-6">
                <div>
                  <p>Minimum contribution amount</p>
                  <span className=" flex gap-1 items-center text-lg mt-1">
                    <FaEthereum className=" text-primary" />
                    0.001ETH
                  </span>
                </div>
                <div className=" basis-[45%]">
                  <p>Goal</p>
                  <span className=" flex gap-1 items-center text-lg mt-1">
                    <FaEthereum className=" text-primary" />
                    0.001ETH
                  </span>
                </div>
              </div>

              <div className=" flex items-center justify-between">
                <div className=" w-[50%] basis-[50%]">
                  <p>Wallet Address of FundRaiser</p>
                  <span className=" w-full flex gap-2 items-center text-lg mt-1">
                    <IoWalletOutline size={28} />
                    <span className="w-full mr-10 overflow-hidden text-ellipsis whitespace-nowrap">
                      0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t
                    </span>
                  </span>
                </div>
                <div className=" basis-[45%]">
                  <p>
                    Contribution are accepted till{" "}
                    <span className=" italic">(Deadline)</span>
                  </p>
                  <span className=" w-full flex gap-2 items-center text-lg mt-1 line-clamp-1">
                    <IoIosTimer size={24} />
                    Tue May 29 2024
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --------danger zone-------- */}
          <div>
            <h2 className=" text-white text-xl font-medium mb-4">
              Danger Zone
            </h2>
          </div>

          <div className=" px-6 py-3 rounded-lg bg-red-300 flex justify-between items-center">
            <div>
              <h4 className=" text-lg font-bold">Quit & Refund</h4>
              <p className=" text-base">
                Once you end a campaign, there is no going back. <br />
                Please be certain.
              </p>
            </div>
            <button className=" uppercase bg-red-600 rounded-lg shadow-md text-white p-6 font-medium">
              Abort <br />
              Campaign
            </button>
          </div>
        </div>

        {/* -------left side------- */}
        <div className=" w-[50%] pl-6 pr-4 text-gray-300">
          {/* ---------------- */}
          <div className=" mb-10">
            <h3 className=" text-lg font-medium mb-4 text-white">
              Current status of campaign
            </h3>

            <div className=" bg-[#343A40] rounded-lg p-6">
              <h3 className=" text-xl font-medium mb-4">Campaign Balance</h3>
              <p>Amount stored in smart contract.</p>
              <div className="flex mb-1 items-center justify-between gap-5">
                <Progress value={33} className=" h-2" />
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl text-lg">
                  33%
                </p>
              </div>
              <p>0 ETH funded by 0 backers</p>
            </div>
          </div>

          {/* --------withdraw-------- */}
          <div>
            <h3 className=" text-lg font-medium mb-4 text-white">Withdraw</h3>

            <div className=" p-6 bg-[#343A40] rounded-lg">
              <h2 className=" text-lg font-bold text-white mb-3">
                Withdraw Raised Funds
              </h2>

              <div className=" p-4 rounded-md bg-blue-200 flex items-center gap-3 mb-3">
                <BiInfoCircle className=" text-blue-800" size={20} />
                <span className=" text-base text-blue-800">
                  To withdraw raised funds, campaign has to be{" "}
                  <span className=" font-bold">ended</span>
                </span>
              </div>

              <div className=" p-4 rounded-md bg-orange-200 flex items-center gap-3 mb-6">
                <TiInfoOutline className=" text-orange-800" size={20} />
                <Checkbox className=" border-orange-800" />
                <span className=" text-base text-orange-800">
                  I/We undestand that, once campaign has ended it cannot be
                  reversed.
                </span>
              </div>

              <button className=" w-full p-3 rounded-md bg-red-600 uppercase text-white font-medium shadow-md">
                End Campaign & Withdraw
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
