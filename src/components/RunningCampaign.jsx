import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Campaign from './Campaign';

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const [loadedCampaigns, setLoadedCampaigns] = useState(campaigns);

  console.log('campaigns from loader:', campaigns);
  console.log('Loaded campaigns state:', loadedCampaigns);

  const displayedCampaigns = loadedCampaigns.slice(0, 6);

  return (
    <div className="lg:w-4/5 mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Running Campaigns</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Array.isArray(displayedCampaigns) &&
          displayedCampaigns.map((campaign) => (
            <Campaign
              campaign={campaign}
              loadedCampaigns={loadedCampaigns}
              setLoadedCampaigns={setLoadedCampaigns}
              key={campaign._id}
            />
          ))}
      </div>
    </div>
  );
};

export default RunningCampaign;
