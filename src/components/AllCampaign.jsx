import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    fetch('https://b-10-a-10-server-side.vercel.app/campaigns') 
      .then((res) => res.json())
      .then((data) => setCampaigns(data))
      .catch((error) => console.error('Error fetching campaigns:', error));
  }, []);

  return (
    <div className="lg:w-4/5 mx-auto py-6 px-4">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">All Campaigns</h1>

      {campaigns.length === 0 ? (
        <p className="text-center text-gray-600">No campaigns available.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200 text-left">
                <th className="border border-gray-300 px-4 py-2">Title</th>
                <th className="border border-gray-300 px-4 py-2">Type</th>
                <th className="border border-gray-300 px-4 py-2">Minimum Donation</th>
                <th className="border border-gray-300 px-4 py-2">Deadline</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {campaigns.map((campaign) => (
                <tr key={campaign._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{campaign.title}</td>
                  <td className="border border-gray-300 px-4 py-2">{campaign.type}</td>
                  <td className="border border-gray-300 px-4 py-2">
                    ${campaign.minimumDonation}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <Link to={`/details/${campaign._id}`}>
                      <button className="btn bg-[#FF5103] text-white py-1 px-3 rounded hover:bg-[#e44902] transition">
                        See More
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AllCampaign;
