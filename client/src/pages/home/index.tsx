import CampaingCard from "@/components/base/CampaignCard";
import HeroSection from "@/components/base/HeroSection";
import { Subscribe } from "@/components/base/Subscribe";

export default function __home() {
  return (
    <div className=" text-gray-300 relative w-full">
      <HeroSection />

      <div className=" relative w-full">
        <div className=" w-full flex justify-center items-center pt-8 pb-20">
          <h1 className=" text-4xl text-center font-semibold">Take part in<br /> our <span className=" text-primary">Active</span> Campaign</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-12 w-full px-[9rem]">
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
        </div>

        <>
          <Subscribe />
        </>
      </div>
    </div>
  )
}
