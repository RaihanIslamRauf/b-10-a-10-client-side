import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";

const MyCampaign = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [userCampaign, setUserCampaign] = useState([]);
  console.log(userCampaign);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/user-campaigns/${email}`)
        .then((res) => res.json())
        .then((data) => setUserCampaign(data))
        .catch((error) => console.error("Error fetching campaigns:", error));
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
        fetch(`http://localhost:5000/user-campaigns/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your campaign has been deleted.",
                icon: "success",
              });

              // Update the state to remove the deleted campaign
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

  return (
    <div className="lg:w-4/5 mx-auto py-6">
      <h1 className="text-4xl font-bold text-center mb-8">My Campaigns</h1>

      {userCampaign?.length === 0 ? (
        <p className="text-center text-gray-600">No campaigns available.</p>
      ) : (
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Type</th>
              <th className="border border-gray-300 px-4 py-2">
                Minimum Donation
              </th>
              <th className="border border-gray-300 px-4 py-2">Deadline</th>
              <th className="border border-gray-300 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {userCampaign?.map((campaign) => (
              <tr key={campaign?._id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {campaign?.title}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {campaign?.type}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  ${campaign?.minimumDonation}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {new Date(campaign.deadline).toLocaleDateString()}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Link to={`/updateCampaign/${campaign._id}`}>
                    <button className="btn join-item bg-green-600 text-white">Update</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(campaign._id)}
                    className="btn join-item bg-red-600 text-white"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyCampaign;
