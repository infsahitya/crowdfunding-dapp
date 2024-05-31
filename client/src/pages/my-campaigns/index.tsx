import CampaingCard from "@/components/base/CampaignCard";
import { usePublicCampaigns } from "@/hooks";

export default function __myCampaigns() {
  const { allCampaigns } = usePublicCampaigns();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-12 w-full px-[4rem] xl:px-[9rem]">
      {allCampaigns.map((campaign, index) => (
            <CampaingCard key={index} {...campaign} />
      ))}
    </div>
  )
}
