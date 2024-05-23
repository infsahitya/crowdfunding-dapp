import { Bg } from "@/assets";

export default function HeroSection() {
  return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row ">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Together <span className=" text-primary">We</span> Can Make a <span className=" text-primary">Difference</span> 
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Fund the Future of Hope and Opportunity.
        Support <br /> NGOs, NPOs, and STCs through Decentralized Fundraising
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-600 dark:text-gray-50">Contact Us</a>
          <a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded dark:border-gray-800 hover:border-primary hover:text-primary">Create Campaing</a>
        </div>
      </div>
      <div className="flex items-center justify-center py-0 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-[30rem] xl:h-112 2xl:h-128">
        <img src={Bg} alt="" className="object-contain h-72 sm:h-80 lg:h-[30rem] xl:h-112 2xl:h-128" />
      </div>
    </div>
    </section>
  )
}
