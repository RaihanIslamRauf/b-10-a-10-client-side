import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 mt-4 mb-4 p-4 w-1/4 lg:min-h-screen shadow-lg">
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard/overview" className="btn bg-[#FF5103] hover:bg-[#e24901] text-white w-full">
            📊 Overview
          </Link>
        </li>
        <li>
          <Link to="/dashboard/profile" className="btn bg-[#FF5103] hover:bg-[#e24901] text-white w-full">
            👤 Profile
          </Link>
        </li>
        <li>
          <Link to="/dashboard/add-new-campaign" className="btn bg-[#FF5103] hover:bg-[#e24901] text-white w-full">
            ➕ Add Campaign
          </Link>
        </li>
        <li>
          <Link to="/dashboard/my-campaign" className="btn bg-[#FF5103] hover:bg-[#e24901] text-white w-full">
            📁 My Campaigns
          </Link>
        </li>
        <li>
          <Link to="/dashboard/my-donations" className="btn bg-[#FF5103] hover:bg-[#e24901] text-white w-full">
            💰 My Donations
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
