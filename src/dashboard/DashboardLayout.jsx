import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import UseTitle from "../hooks/UseTitle";

const DashboardLayout = () => {
  UseTitle();

  return (
    <div className="flex flex-col md:flex-row min-h-screen mt-4 mb-4 dark:bg-gray-800">
      {/* Sidebar at the top on mobile, left on desktop */}
      <Sidebar />

      {/* Main Content Section */}
      <div className="p-4 sm:p-6 w-full text-white">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-black dark:text-white">
          Welcome to CrowdCube Dashboard
        </h2>
        <p className="text-base sm:text-lg mb-6 text-black dark:text-white">
          Select an option from the sidebar to manage your campaigns, donations, and profile.
        </p>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
