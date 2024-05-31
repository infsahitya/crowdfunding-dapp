import { useMyCampaigns } from "@/hooks";
import CampaingCard from "@/components/base/CampaignCard";

export default function __myCampaigns() {
  const { myCampaigns } = useMyCampaigns();

  return (
    <div className="relative py-10">
      <div className="relative w-full flex justify-center items-center pt-8 pb-20">
        <h1 className=" text-4xl text-center font-semibold">
          My
          <br />
          <span className=" text-primary">Campaign</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-12 w-full px-[4rem] xl:px-[9rem]">
        {myCampaigns.map((campaign, index) => (
          <CampaingCard key={index} {...campaign} />
        ))}
      </div>
    </div>
  );
}
