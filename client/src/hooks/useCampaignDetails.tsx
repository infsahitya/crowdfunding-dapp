import useAppStore from "@/store/app.store";
import { useEffect, useState } from "react";

export default function useCampaignDetails(id: string) {
  const app = useAppStore((state) => state.getApp());
  const [campaignDetails, setCampaignDetails] = useState<CampaignProps>(
    {} as CampaignProps,
  );

  useEffect(() => {
    app.getPublicCampaigns().then((result: CampaignProps[]) => {
      setCampaignDetails(
        () => result.find((campaign) => campaign.id.toString() === id)!,
      );
    });

    // app.getCampaign(id).then((campaign: CampaignProps) => {
    //   setCampaignDetails(() => ({
    //     id: campaign.id,
    //     title: campaign.title,
    //     status: campaign.status,
    //     donors: campaign.donors,
    //     creator: campaign.creator,
    //     endDateTime: campaign.endDateTime,
    //     description: campaign.description,
    //     thumbnailURI: campaign.thumbnailURI,
    //     raisedAmount: campaign.raisedAmount,
    //     targetGoalAmount: campaign.targetGoalAmount,
    //     minimumGoalAmount: campaign.minimumGoalAmount,
    //   }));
    // });
  }, []); // eslint-disable-line

  return { campaignDetails } as const;
}
