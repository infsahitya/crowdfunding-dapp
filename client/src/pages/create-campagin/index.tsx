import { MdCampaign } from "react-icons/md";

export default function __createCampaign() {
  return (
    <div className=" p-6">
      <div className="flex items-center space-x-5">
        <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
          <MdCampaign />
        </div>
        <div className="block pl-2 font-semibold text-xl self-start text-white">
          <h2 className="leading-relaxed">Create an Campaign</h2>
          <p className="text-sm text-gray-300 font-normal leading-relaxed">Launch Your Next Big Campaign!</p>
        </div>
      </div>

      <div className=" flex ">
        {/* right-side */}
        <div className=" w-1/2 py-6 flex flex-col gap-4">
          <div className="flex flex-col text-white ">
            <label className="leading-loose">Campaign Title</label>
            <input type="text" className="px-4 py-4 border focus:ring-primary focus:border-primary w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-300 placeholder:text-gray-300 bg-background" placeholder="Campaign title" />
          </div>
        </div>

        {/* --lefet side-- */}
        <div className=" w-1/2">

        </div>
      </div>
    </div>
  )
}
