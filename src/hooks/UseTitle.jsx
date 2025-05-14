import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const titles = {
      "/": "Home - CrowdCube",
      "/login": "Login - CrowdCube",
      "/register": "Register - CrowdCube",
      "/all-campaign": "All Campaigns - CrowdCube",
      "/running-campaign": "Running Campaigns - CrowdCube",
      "/dashboard": "Dashboard - CrowdCube",
      "/dashboard/overview": "Overview - CrowdCube",
      "/dashboard/profile": "Profile - CrowdCube",
      "/dashboard/add-new-campaign": "Add Campaign - CrowdCube",
      "/dashboard/my-campaign": "My Campaigns - CrowdCube",
      "/dashboard/my-donations": "My Donations - CrowdCube",
      "/aboutUs": "About Us - CrowdCube",
      "/contactUs": "Contact Us - CrowdCube",
      "/terms": "Terms Of Service - CrowdCube",
      "/privacyPolicy": "Privacy Policy - CrowdCube"

    };

    if (location.pathname.startsWith("/dashboard/updateCampaign/")) {
      document.title = "Update Campaign - CrowdCube";
    } else if (location.pathname.startsWith("/dashboard/details/")) {
      document.title = "Campaign Details - CrowdCube";
    } else {
      document.title = titles[location.pathname] || "CrowdCube";
    }
  }, [location]);
};

export default UseTitle;
