import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiRefund2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";
import { ThemeContext } from "../themeProvider/ThemeProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [fetchedUser, setFetchedUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(
          `https://b-10-a-10-server-side.vercel.app/users`
        );
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
        Swal.fire({
          icon: "success",
          title: "Logged Out!",
          timer: 2000,
          showConfirmButton: false,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout Failed",
          text: error.message,
        });
      });
  };

  const navLinkStyle = ({ isActive }) =>
    `font-semibold text-sm transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "text-[#FF5103] border border-[#FF5103]"
        : "text-black dark:text-white hover:text-[#FF5103] hover:bg-gray-100 dark:hover:bg-gray-800"
    }`;

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-300 shadow-md ${
        isScrolled ? "backdrop-blur-md bg-opacity-90" : ""
      } bg-white dark:bg-gray-900`}
    >
      <div className="navbar px-4 md:px-8 lg:px-16 text-black dark:text-white">
        {/* Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-[20px] text-[#FF5103]" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 z-50 text-black dark:text-white"
            >
              <NavLink className={navLinkStyle} to="/">
                Home
              </NavLink>
              <NavLink className={navLinkStyle} to="/all-campaign">
                All Campaign
              </NavLink>
                <NavLink className={navLinkStyle} to="/dashboard">
                  Dashboard
                </NavLink>
               <NavLink className={navLinkStyle} to="/aboutUs">About Us</NavLink>
<NavLink className={navLinkStyle} to="/contactUs">Contact Us</NavLink>
            </ul>
          </div>
          <NavLink
            to="/"
            className="btn btn-ghost text-xl flex items-center gap-1"
          >
            <RiRefund2Line className="text-[20px] text-[#FF5103]" />
            <h1 className="text-[20px] text-[#FF5103] font-bold italic">
              CrowdCube
            </h1>
          </NavLink>
        </div>

        {/* Center */}
        <div className="hidden lg:flex navbar-center">
          <ul className="flex gap-4">
            <NavLink className={navLinkStyle} to="/">
              Home
            </NavLink>
            <NavLink className={navLinkStyle} to="/all-campaign">
              All Campaign
            </NavLink>
            <NavLink className={navLinkStyle} to="/dashboard">
              Dashboard
            </NavLink>
            <NavLink className={navLinkStyle} to="/aboutUs">
              About Us
            </NavLink>
            <NavLink className={navLinkStyle} to="/contactUs">
              Contact Us
            </NavLink>
          </ul>
        </div>

        {/* End */}
        <div className="navbar-end gap-3 items-center">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl px-3 py-1 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition"
            title="Toggle Theme"
          >
            {darkMode ? "🌞" : "🌙"}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <img
                  src={
                    fetchedUser?.photo || user.photoURL || "/default-avatar.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#FF5103] object-cover"
                />
                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-all z-50 p-4 text-sm text-black dark:text-white">
                  <p className="font-semibold truncate">
                    {fetchedUser?.name || user.displayName || "User"}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 truncate">
                    {fetchedUser?.email || user.email || "No Email"}
                  </p>
                </div>
              </div>
              <button
                onClick={handleLogOut}
                className="btn bg-[#FF5103] text-white hover:bg-[#e44d00] transition-all duration-300"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <NavLink to="/login">
                <button className="btn bg-[#FF5103] text-white text-sm hover:bg-[#e44d00]">
                  Login
                </button>
              </NavLink>
              <NavLink to="/register">
                <button className="btn bg-[#FF5103] text-white text-sm hover:bg-[#e44d00]">
                  Register
                </button>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
