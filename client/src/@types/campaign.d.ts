interface CampaignProps {
  id: bigint;
  title: string;
  status: string;
  creator: string;
  endDateTime: string;
  description: string;
  thumbnailURI: string;
  raisedAmount: bigint;
  targetGoalAmount: bigint;
  minimumGoalAmount: bigint;
  donors: string[];
}
