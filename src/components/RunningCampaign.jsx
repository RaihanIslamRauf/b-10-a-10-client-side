import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Campaign from './Campaign';

const RunningCampaign = () => {
  const campaigns = useLoaderData();
  const [loadedCampaigns, setLoadedCampaigns] = useState(campaigns);
  
  // Debugging logs (optional)
  console.log('campaigns from loader:', campaigns);
  console.log('Loaded coffees state:', loadedCampaigns);
  

  return (
    <div className="lg:w-4/5 mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-8">Running Campaigns</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {
                    // Check if loadedCoffees is an array before mapping
                    Array.isArray(loadedCampaigns) && loadedCampaigns.map(campaign => (
                        <Campaign
                            campaign={campaign}
                            loadedCampaigns={loadedCampaigns}
                            setLoadedCampaigns={setLoadedCampaigns}
                            key={campaign._id}
                        />
                    ))
                }
            </div>
      </div>
  );
};

export default RunningCampaign;
