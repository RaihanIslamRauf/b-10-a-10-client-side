import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../components/Home";
import AllCampaign from "../components/AllCampaign";
import AddNewCampaign from "../components/AddNewCampaign";
import MyCampaign from "../components/MyCampaign";
import MyDonations from "../components/MyDonations";
import ErrorPage from "../components/ErrorPage";
import Details from "../components/Details";
import Login from "../components/Login";
import Register from "../components/Register";
import UpdateCampaign from "../components/UpdateCampaign";
import PrivateRoute from "./privateRoute";
import DashboardLayout from "../dashboard/DashboardLayout";
import Overview from "../dashboard/Overview";
import Profile from "../dashboard/Profile";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch(`https://b-10-a-10-server-side.vercel.app/campaigns`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/all-campaign",
        element: <AllCampaign></AllCampaign>,
      },
      {
        path: "/running-campaign",
        element: <AllCampaign></AllCampaign>,
        loader: () =>
          fetch(`https://b-10-a-10-server-side.vercel.app/runningCampaigns`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <DashboardLayout></DashboardLayout>
          </PrivateRoute>
        ),
        children: [
          {
            path: "overview",
            element: (
                <Overview></Overview>
            ),
          },
          {
            path: "profile",
            element: (
                <Profile></Profile>
            ),
          },
          {
            path: "add-new-campaign",
            element: (
                <AddNewCampaign></AddNewCampaign>
            ),
          },
          {
            path: "my-campaign",
            element: (
              <PrivateRoute>
                <MyCampaign></MyCampaign>
              </PrivateRoute>
            ),
          },
          {
            path: "updateCampaign/:id",
            element: (
                <UpdateCampaign></UpdateCampaign>
            ),
            loader: ({ params }) =>
              fetch(
                `https://b-10-a-10-server-side.vercel.app/campaigns/${params.id}`
              ),
          },
          {
            path: "my-donations",
            element: (
                <MyDonations></MyDonations>
            ),
          },
          {
            path: "details/:id",
            element: (
                <Details></Details>
            ),
            loader: ({ params }) =>
              fetch(
                `https://b-10-a-10-server-side.vercel.app/campaigns/${params.id}`
              ),
          },
        ],
      },
    ],
  },
]);

export default router;
