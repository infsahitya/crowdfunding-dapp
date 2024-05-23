import CampaingCard from "@/components/base/CampaignCard";
import HeroSection from "@/components/base/HeroSection";

export default function __home() {
  return (
    <div className=" text-gray-300 relative w-full">
      <HeroSection />

      <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full px-[9rem]">
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
        </div>
      </div>
    </div>
  )
}
