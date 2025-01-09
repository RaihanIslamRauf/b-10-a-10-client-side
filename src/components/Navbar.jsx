import { NavLink } from "react-router-dom";
import { RiRefund2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [fetchedUser, setFetchedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`https://b-10-a-10-server-side.vercel.app/users`);
        const data = await response.json();
        setFetchedUser(data.find((u) => u.email === user?.email)); 
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    if (user) fetchUsers(); 
  }, [user]);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `font-[500] text-[12px] ${
      isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
    }`;

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <FaBars className="text-[20px] text-orange-600" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <NavLink className={navLinkStyle} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyle} to="/all-campaign">
              All Campaign
            </NavLink>
            <NavLink className={navLinkStyle} to="/add-new-campaign">
              Add New Campaign
            </NavLink>
            <NavLink className={navLinkStyle} to="/my-campaign">
              My Campaign
            </NavLink>
            <NavLink className={navLinkStyle} to="/my-donations">
              My Donations
            </NavLink>
          </ul>
        </div>
        <a className="btn flex btn-ghost text-xl">
          <RiRefund2Line className="text-[20px] text-orange-600" />
          <h1 className="text-[20px] text-orange-600 font-[300]">CrowdCube</h1>
        </a>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-3 mr-2">
          <NavLink className={navLinkStyle} to="/">
            Home
          </NavLink>
          <NavLink className={navLinkStyle} to="/all-campaign">
            All Campaign
          </NavLink>
          <NavLink className={navLinkStyle} to="/add-new-campaign">
            Add New Campaign
          </NavLink>
          <NavLink className={navLinkStyle} to="/my-campaign">
            My Campaign
          </NavLink>
          <NavLink className={navLinkStyle} to="/my-donations">
            My Donations
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end gap-2 items-center">
        <div className="login">
          {user ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <img
                  src={fetchedUser?.photo || "default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100">
                  {fetchedUser?.name || "User"} 
                </span>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#FF5103] rounded-md text-white"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink
                to="/login"
                className="btn bg-[#FF5103] text-[14px] text-white"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="btn bg-[#FF5103] text-[14px] text-white"
              >
                Register
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
