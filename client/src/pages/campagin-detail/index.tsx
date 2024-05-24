import { Covid_Img } from "@/assets";
import { Progress } from "@/components/ui/progress";

export default function __campaignDetail() {
  return (
    <div className=" w-full relative px-10 py-8">
      <h1 className=" text-xl font-medium text-gray-300 mb-4">About Campaign</h1>
        <div className=" w-full relative flex">
          <div className=" w-[50%] ">
            {/* -------img-wrapper------- */}
            <div 
              className="mb-4 w-full relative rounded-xl inline-block" 
              style={{ height: '20em' }}
            >
              <div 
                className="absolute left-0 bottom-0 w-full h-full z-10 rounded-xl"
                style={{ backgroundImage: 'linear-gradient(180deg,transparent,rgba(0,0,0,.7))' }}
              ></div>
              <img 
                src={Covid_Img} alt="campaign img"
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
            <div className=" ">
              <h2 className=" text-gray-300 text-xl font-medium">Description</h2>
              <p className=" text-gray-300 text-base line-clamp-3">Take part in giving reliefs to Covid-19 victims Take part in giving reliefs to Covid-19 victims Take part in giving reliefs to Covid-19 victims Take part in giving reliefs to Covid-19 victims Take part in giving reliefs to Covid-19 victims Take part in giving reliefs to Covid-19 victims</p>
            </div>

            {/* -------contribution details------- */}
            <div>

            </div>
          </div>

          {/* -------left side------- */}
          <div className=" w-[50%] px-4 text-gray-300">
            <h3 className=" text-lg font-medium mb-4">Current status of campaign</h3>

            <div className=" bg-[#343A40] rounded-lg p-6">
              <h3 className=" text-xl font-medium mb-4">Campaign Balance</h3>
              <p>Amount stored in smart contract.</p>
              <div className="flex mb-1 items-center justify-between gap-5">
                <Progress value={33} className=" h-2"/>
                <p className="inline-block font-semibold text-primary whitespace-nowrap leading-tight rounded-xl text-lg">
                 33%
                </p>
              </div>
              <p>0 ETH funded by 0 backers</p>
            </div>
          </div>
        </div>
    </div>
  )
}
