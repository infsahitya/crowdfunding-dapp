import { useEffect } from "react";
import useAppStore from "@/store/app.store";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import { Subscribe } from "@/components/base/Subscribe";
import CampaingCard from "@/components/base/CampaignCard";

export default function __home() {
  const app = useAppStore((state) => state.getApp());

  useEffect(() => {
    (async () => {
      const data = await app.getUserCampaigns();

      console.log(
        "User Campaigns - ",
        // eslint-disable-next-line
        data.map((campaign: any) => {
          return {
            id: campaign.id,
            name: campaign.title,
          };
        }),
      );

      const data2 = await app.getPublicCampaigns();
      console.log(
        "Public Campaigns - ",
        // eslint-disable-next-line
        data2.map((campaign: any) => {
          return {
            id: campaign.id,
            name: campaign.title,
          };
        }),
      );
    })();
  }, []); // eslint-disable-line

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
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
          <CampaingCard />
        </div>

        <Subscribe />
        <Footer />
      </div>
    </div>
  );
}
