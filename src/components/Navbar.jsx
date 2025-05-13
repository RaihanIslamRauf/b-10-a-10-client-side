import { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { RiRefund2Line } from "react-icons/ri";
import { FaBars } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [fetchedUser, setFetchedUser] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  // Handle navbar scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fetch user data from backend
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

  // Logout handler
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

  // NavLink style
  const navLinkStyle = ({ isActive }) =>
    `font-semibold text-sm transition-all duration-300 px-3 py-2 rounded-md ${
      isActive
        ? "text-[#FF5103] border border-[#FF5103]"
        : "text-black hover:text-[#FF5103] hover:bg-gray-100"
    }`;

  return (
    <div
      className={`sticky top-0 z-50 bg-gray-200 shadow-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md bg-opacity-90" : ""
      }`}
    >
      <div className="navbar px-4 md:px-8 lg:px-16">
        {/* Start */}
        <div className="navbar-start">
          {/* Mobile menu */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <FaBars className="text-[20px] text-[#FF5103]" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm font-semibold dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 z-50 text-black"
            >
              <NavLink className={navLinkStyle} to="/">Home</NavLink>
              <NavLink className={navLinkStyle} to="/all-campaign">All Campaign</NavLink>
              <NavLink className={navLinkStyle} to="/add-new-campaign">Add New Campaign</NavLink>
              <NavLink className={navLinkStyle} to="/my-campaign">My Campaign</NavLink>
              <NavLink className={navLinkStyle} to="/my-donations">My Donations</NavLink>
            </ul>
          </div>
          <NavLink to="/" className="btn btn-ghost text-xl flex items-center gap-1">
            <RiRefund2Line className="text-[20px] text-[#FF5103]" />
            <h1 className="text-[20px] text-[#FF5103] font-bold italic">CrowdCube</h1>
          </NavLink>
        </div>

        {/* Center (Desktop Nav) */}
        <div className="hidden lg:flex navbar-center">
          <ul className="flex gap-4">
            <NavLink className={navLinkStyle} to="/">Home</NavLink>
            <NavLink className={navLinkStyle} to="/all-campaign">All Campaign</NavLink>
            <NavLink className={navLinkStyle} to="/add-new-campaign">Add New Campaign</NavLink>
            <NavLink className={navLinkStyle} to="/my-campaign">My Campaign</NavLink>
            <NavLink className={navLinkStyle} to="/my-donations">My Donations</NavLink>
          </ul>
        </div>

        {/* End Section (Right) */}
        <div className="navbar-end gap-3 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative group cursor-pointer">
                <img
                  src={
                    fetchedUser?.photo ||
                    user.photoURL ||
                    "/default-avatar.png"
                  }
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-[#FF5103] object-cover"
                />
                <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                  {fetchedUser?.name || user.displayName || "User"}
                </span>
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
