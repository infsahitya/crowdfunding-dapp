import { Covid_Img } from "@/assets";
import { FaEthereum } from "react-icons/fa6";
import { IoIosTimer } from "react-icons/io";
import { Progress } from "@/components/ui/progress"


const CampaingCard = () => {
  return (
      <div className="relative mx-auto w-full">
        <a href="#" className="relative inline-block duration-300 ease-in-out transition-transform transform hover:-translate-y-2 w-full">
          <div className="shadow p-4 rounded-lg bg-[#343A40] text-gray-300">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
              <div className="transition-transform duration-500 transform ease-in-out hover:scale-110 w-full">
                {/* <div className="absolute inset-0 bg-black opacity-10"> */}
                  <img src={Covid_Img} alt="campaign img" />
                {/* </div> */}
              </div>

              <div className="absolute flex justify-center bottom-0 mb-3">
                <div className="flex bg-white px-4 py-1 space-x-5 rounded-lg overflow-hidden shadow">
                  <p className="flex items-center font-medium text-gray-800">
                    3 + 1
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    2
                  </p>

                  <p className="flex items-center font-medium text-gray-800">
                    3
                  </p>
                </div>
              </div>

              <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-red-500 text-sm font-medium text-white select-none">
                Active
              </span>
            </div>

            <div className="mt-4">
              <h2 className="font-medium text-base md:text-xl text-gray-300 line-clamp-2" title="New York">
                Distribution of Covid Vaccine
              </h2>
              <p className="mt-2 text-base text-gray-300 line-clamp-3" title="Take part in giving reliefs to Covid-19 victims">
                Take part in giving reliefs to Covid-19 victims
              </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-5">
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300">
                <span className="mt-2 xl:mt-0">
                  ETH Funded
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300 ml-8">
                <span className="mt-2 xl:mt-0">
                  ETH Raised
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300">
                <FaEthereum className=" text-primary"/>
                <span className="mt-2 xl:mt-0">
                  1,386
                </span>
              </p>
              <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-300 ml-8">
                <FaEthereum className=" text-primary"/>
                <span className="mt-2 xl:mt-0">
                  1.98
                </span>
              </p>
            </div>

            <div className=" mt-4">
              <Progress value={33} />
            </div>

            <div className="grid grid-cols-2 mt-4">
              <div className="flex items-center">
                <div className="relative">
                  <IoIosTimer size={26}/>
                </div>

                <p className="ml-2 text-gray-300 line-clamp-1">
                  1 day left
                </p>
              </div>

              <div className="flex justify-end">
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl text-lg">
                 33%
                </p>
              </div>
            </div>
          </div>
        </a>
      </div>
  );
};

export default CampaingCard;
