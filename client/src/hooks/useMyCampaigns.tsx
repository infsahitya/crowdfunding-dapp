import { useEffect, useState } from "react";
import useAppStore from "@/store/app.store";

export default function useMyCampaigns() {
  const app = useAppStore((state) => state.getApp());
  const [myCampaigns, setMyCampaigns] = useState<CampaignProps[]>([]);

  useEffect(() => {
    app.getUserCampaigns().then((result: CampaignProps[]) => {
      setMyCampaigns(() =>
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

  return { myCampaigns } as const;
}
