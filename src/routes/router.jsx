import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AllCampaign from "../components/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign";
import MyCampaign from "../components/MyCampaign";
import MyDonations from "../components/MyDonations";
import ErrorPage from "../components/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () =>fetch(`http://localhost:5000/campaigns`)
        },
        {
            path: "/all-campaign",
            element: <AllCampaign></AllCampaign>
        },
        {
            path: "/add-new-campaign",
            element:<AddNewCampaign></AddNewCampaign>
        },
        {
            path: "/my-campaign",
            element:<MyCampaign></MyCampaign>
        },
        {
            path: "/my-donations",
            element:<MyDonations></MyDonations>
        },
    ]
  },
]);

export default router;
