import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader'; // adjust the path if needed

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://b-10-a-10-server-side.vercel.app/campaigns')
      .then((res) => res.json())
      .then((data) => {
        setCampaigns(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching campaigns:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-12 px-4 md:px-8 lg:px-16 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        All Campaigns
      </h1>

      {campaigns.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No campaigns available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign) => (
            <div
              key={campaign._id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={campaign.imageUrl}
                alt={campaign.title}
                className="w-full h-48 object-cover"
              />

              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold text-gray-800 dark:text-white">{campaign.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Type: {campaign.type}</p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Min Donation:{' '}
                  <span className="text-gray-800 dark:text-white font-semibold">
                    ${campaign.minimumDonation}
                  </span>
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Deadline:{' '}
                  <span className="text-gray-700 dark:text-white font-semibold">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </span>
                </p>
              </div>

              <div className="p-5 pt-0">
                <Link to={`/details/${campaign._id}`}>
                  <button className="w-full bg-[#FF5103] text-white hover:bg-[#e44902] shadow-md transition-all rounded-md px-4 py-2">
                    See More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCampaign;
