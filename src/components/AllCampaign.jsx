import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from '../components/Loader';
import UseTitle from '../hooks/UseTitle';
import { FaSearch } from 'react-icons/fa';

const AllCampaign = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('');

  UseTitle("All Campaigns");

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

  // Sort logic
  const sortedCampaigns = [...campaigns].sort((a, b) => {
    if (sortBy === 'title') return a.title.localeCompare(b.title);
    if (sortBy === 'donationAsc') return parseInt(a.minimumDonation) - parseInt(b.minimumDonation);
    if (sortBy === 'donationDesc') return parseInt(b.minimumDonation) - parseInt(a.minimumDonation);
    if (sortBy === 'deadline') return new Date(a.deadline) - new Date(b.deadline);
    return 0;
  });

  // Search logic
  const filteredCampaigns = sortedCampaigns.filter((campaign) =>
    campaign.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="mx-auto mt-12 px-4 md:px-8 lg:px-16 mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-gray-800 dark:text-white">
        All Campaigns
      </h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        {/* Search Input */}
        <div className="relative w-full md:w-1/2">
          <input
            type="text"
            placeholder="Search by Campaign Title"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 rounded-md 
                       bg-gray-100 text-gray-800 
                       dark:bg-gray-900 dark:text-white 
                       focus:outline-none focus:ring-2 focus:ring-[#FF5103]"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 dark:text-gray-400" />
        </div>

        {/* Sort Dropdown */}
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full md:w-1/4 py-2 px-4 rounded-md 
                     bg-gray-100 text-gray-800 
                     dark:bg-gray-900 dark:text-white 
                     focus:outline-none focus:ring-2 focus:ring-[#FF5103]"
        >
          <option value="">Sort By</option>
          <option value="title">Title (A-Z)</option>
          <option value="donationAsc">Min Donation (Low to High)</option>
          <option value="donationDesc">Min Donation (High to Low)</option>
          <option value="deadline">Deadline (Soonest First)</option>
        </select>
      </div>

      {filteredCampaigns.length === 0 ? (
        <p className="text-center text-gray-600 dark:text-gray-300">
          No campaigns available.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCampaigns.map((campaign) => (
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
                <Link to={`/dashboard/details/${campaign._id}`}>
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
