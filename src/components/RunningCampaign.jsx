import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Campaign from './Campaign';

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const [loadedCampaigns, setLoadedCampaigns] = useState(campaigns);

  const displayedCampaigns = loadedCampaigns.slice(0, 6);

  return (
    <div className="mx-auto mt-4 py-6 px-4">
      <h1 className="text-4xl font-bold text-black dark:text-white text-center mb-8">Running Campaigns</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
