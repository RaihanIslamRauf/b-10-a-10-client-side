import { useEffect, useState } from 'react';
import Campaign from '../components/Campaign';
import Loader from '../components/Loader'; 

const Overview = () => {
  const [featuredCampaigns, setFeaturedCampaigns] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCampaigns, setTotalCampaigns] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const userRes = await fetch('https://b-10-a-10-server-side.vercel.app/users');
        const users = await userRes.json();
        setTotalUsers(users.length);

        const campaignRes = await fetch('https://b-10-a-10-server-side.vercel.app/campaigns');
        const campaigns = await campaignRes.json();
        setFeaturedCampaigns(campaigns.slice(0, 3));
        setTotalCampaigns(campaigns.length);
      } catch (err) {
        console.error('Error loading overview data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchOverviewData();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="p-6 text-black dark:text-white">
      {/* Stats Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Total Users</h3>
          <p className="text-3xl font-bold text-[#FF5103]">{totalUsers}</p>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-lg p-6 shadow text-center">
          <h3 className="text-xl font-semibold mb-2">Total Campaigns</h3>
          <p className="text-3xl font-bold text-[#FF5103]">{totalCampaigns}</p>
        </div>
      </div>

      {/* Featured Campaigns */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Featured Campaigns</h2>
        {featuredCampaigns.length === 0 ? (
          <p className="text-gray-400">No campaigns found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredCampaigns.map((campaign) => (
              <Campaign key={campaign._id} campaign={campaign} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
