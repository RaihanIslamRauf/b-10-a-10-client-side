import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import Loader from "../components/Loader";
import UseTitle from "../hooks/UseTitle";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userCampaign, setUserCampaign] = useState([]);
  const [loading, setLoading] = useState(true);
  UseTitle();

  useEffect(() => {
    if (email) {
      fetch(`https://b-10-a-10-server-side.vercel.app/user-campaigns/${email}`)
        .then((res) => res.json())
        .then((data) => {
          setUserCampaign(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching campaigns:", error);
          setLoading(false);
        });
    }
  }, [email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://b-10-a-10-server-side.vercel.app/user-campaigns/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your campaign has been deleted.", "success");
              const remainingCampaigns = userCampaign.filter(
                (campaign) => campaign._id !== _id
              );
              setUserCampaign(remainingCampaigns);
            }
          })
          .catch((error) => console.error("Error deleting campaign:", error));
      }
    });
  };

  if (loading) return <Loader />;

  return (
    <div className="lg:w-4/5 mx-auto py-6 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-black dark:text-white">
        My Campaigns
      </h1>

      {userCampaign?.length === 0 ? (
        <p className="text-center text-black dark:text-gray-300">
          No campaigns available here.
        </p>
      ) : (
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse border border-gray-300 dark:border-gray-700">
            <thead>
              <tr className="bg-gray-50 dark:bg-gray-900 text-left">
                <th className="border border-gray-300 dark:border-gray-900 px-4 py-2 text-black dark:text-gray-200">
                  Title
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-200">
                  Type
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-200">
                  Minimum Donation
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-200">
                  Deadline
                </th>
                <th className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-200">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {userCampaign?.map((campaign) => (
                <tr key={campaign?._id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-100">
                    {campaign?.title}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-100">
                    {campaign?.type}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-100">
                    ${campaign?.minimumDonation}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 text-black dark:text-gray-100">
                    {new Date(campaign.deadline).toLocaleDateString()}
                  </td>
                  <td className="border border-gray-300 dark:border-gray-700 px-4 py-2 space-x-2">
                    <Link to={`/dashboard/updateCampaign/${campaign._id}`}>
                      <button className="btn bg-green-600 hover:bg-green-700 text-white">
                        Update
                      </button>
                    </Link>
                    <button
                      onClick={() => handleDelete(campaign._id)}
                      className="btn bg-red-600 hover:bg-red-700 text-white"
                    >
                      Delete
                    </button>
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

export default MyCampaign;
