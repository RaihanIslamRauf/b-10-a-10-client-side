import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-4 mb-4 p-4 w-full md:w-1/3 lg:w-1/4 shadow-lg">
      <ul className="space-y-4">
        <li>
          <Link
            to="/dashboard/overview"
            className="text-base sm:text-lg py-3 px-4 bg-[#FF5103] hover:bg-[#e24901] text-white w-full block text-center rounded-lg"
          >
            📊 Overview
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/profile"
            className="text-base sm:text-lg py-3 px-4 bg-[#FF5103] hover:bg-[#e24901] text-white w-full block text-center rounded-lg"
          >
            👤 Profile
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/add-new-campaign"
            className="text-base sm:text-lg py-3 px-4 bg-[#FF5103] hover:bg-[#e24901] text-white w-full block text-center rounded-lg"
          >
            ➕ Add Campaign
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/my-campaign"
            className="text-base sm:text-lg py-3 px-4 bg-[#FF5103] hover:bg-[#e24901] text-white w-full block text-center rounded-lg"
          >
            📁 My Campaigns
          </Link>
        </li>
        <li>
          <Link
            to="/dashboard/my-donations"
            className="text-base sm:text-lg py-3 px-4 bg-[#FF5103] hover:bg-[#e24901] text-white w-full block text-center rounded-lg"
          >
            💰 My Donations
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
