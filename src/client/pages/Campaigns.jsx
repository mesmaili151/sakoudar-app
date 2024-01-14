import React from 'react';
import { useQuery } from '@wasp/queries';
import getCampaigns from '@wasp/queries/getCampaigns';

export function Campaigns() {
  const { data: campaigns, isLoading, error } = useQuery(getCampaigns);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  return (
    <div>
      {campaigns.map((campaign) => (
        <div key={campaign.id}>
          <p>{campaign.platform}</p>
          <p>{campaign.influencer.name}</p>
          <p>{campaign.user.username}</p>
        </div>
      ))}
    </div>
  );
}