import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import UseTitle from "../hooks/UseTitle";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [fetchedUser, setFetchedUser] = useState(null);
  UseTitle();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://b-10-a-10-server-side.vercel.app/users`);
        const data = await response.json();
        setFetchedUser(data.find((u) => u.email === user?.email));
      } catch (error) {
        console.error("Error fetching user data:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch user data",
        });
      }
    };

    if (user) fetchUserData();
  }, [user]);

  return (
    <div className="container mx-auto p-4 sm:p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-black dark:text-white">Profile</h2>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center sm:items-start">
        {/* Profile Avatar */}
        <img
          src={fetchedUser?.photo || user?.photoURL || "/default-avatar.png"}
          alt="User Avatar"
          className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-[#FF5103] object-cover"
        />

        <div className="text-center sm:text-left">
          <h3 className="text-lg sm:text-xl font-semibold text-black dark:text-white">
            Name: {fetchedUser?.name || user?.displayName || "User Name"}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
            Email: {fetchedUser?.email || user?.email || "No Email"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
