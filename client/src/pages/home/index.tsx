import { useEffect, useState } from "react";
import useAppStore from "@/store/app.store";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import { Subscribe } from "@/components/base/Subscribe";
import CampaingCard from "@/components/base/CampaignCard";

export default function __home() {
  const app = useAppStore((state) => state.getApp());
  const [allCampaigns, setAllCampaigns] = useState<CampaignProps[]>([]);

  useEffect(() => {
    app.getPublicCampaigns().then((result: CampaignProps[]) => {
      setAllCampaigns(() =>
        result.map((campaign) => ({
          id: campaign.id,
          title: campaign.title,
          status: campaign.status,
          donors: campaign.donors,
          creator: campaign.creator,
          endDateTime: campaign.endDateTime,
          description: campaign.description,
          thumbnailURI: campaign.thumbnailURI,
          raisedAmount: campaign.raisedAmount,
          targetGoalAmount: campaign.targetGoalAmount,
          minimumGoalAmount: campaign.minimumGoalAmount,
        })),
      );
    });
  }, []); // eslint-disable-line

  console.log(allCampaigns);

  return (
    <div className=" text-gray-300 relative w-full">
      <HeroSection />

      <div className=" relative w-full">
        <div className=" w-full flex justify-center items-center pt-8 pb-20">
          <h1 className=" text-4xl text-center font-semibold">
            Take part in
            <br /> our <span className=" text-primary">Active</span> Campaign
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 xl:gap-12 w-full px-[4rem] xl:px-[9rem]">
          {allCampaigns.map((campaign, index) => (
            <CampaingCard key={index} {...campaign} />
          ))}
        </div>

        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
