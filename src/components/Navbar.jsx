import { NavLink } from "react-router-dom";
import { RiRefund2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        console.log("User logged out");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

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
            <NavLink
              className={({ isActive }) =>
                `font-[500] text-[12px] ${
                  isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-[500] text-[12px] ${
                  isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
                }`
              }
              to="/all-campaign"
            >
              All Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-[500] text-[12px] ${
                  isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
                }`
              }
              to="/add-new-campaign"
            >
              Add New Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-[500] text-[12px] ${
                  isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
                }`
              }
              to="/my-campaign"
            >
              My Campaign
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-[500] text-[12px] ${
                  isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
                }`
              }
              to="/my-donations"
            >
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
          <NavLink
            className={({ isActive }) =>
              `font-[500] text-[12px] ${
                isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
              }`
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-[500] text-[12px] ${
                isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
              }`
            }
            to="/all-campaign"
          >
            All Campaign
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-[500] text-[12px] ${
                isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
              }`
            }
            to="/add-new-campaign"
          >
            Add New Campaign
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-[500] text-[12px] ${
                isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
              }`
            }
            to="/my-campaign"
          >
            My Campaign
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `font-[500] text-[12px] ${
                isActive ? "text-[#FF5103]" : "hover:text-[#FF5103]"
              }`
            }
            to="/my-donations"
          >
            My Donations
          </NavLink>
        </ul>
        </div>
        <div className="navbar-end gap-2 items-center">
        <div className="login">
        {user ? (
          <div className="flex items-center gap-3">
            <div className="tooltip tooltip-bottom" data-tip={user.displayName}>
              <img
                src={user.photoURL}
                alt="User"
                className="w-8 h-8 rounded-full"
              />
            </div>
            <button onClick={handleLogout} className="btn text-[14px]">
              Log out
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <NavLink to="/login" className="btn bg-[#FF5103] text-[14px] text-white">
              Login
            </NavLink>
            <NavLink to="/register" className="btn bg-[#FF5103] text-[14px] text-white">
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
