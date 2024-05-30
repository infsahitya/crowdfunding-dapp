import { useEffect, useState } from "react";
import useAppStore from "@/store/app.store";

export default function usePublicCampaigns() {
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

  return { allCampaigns } as const;
}
