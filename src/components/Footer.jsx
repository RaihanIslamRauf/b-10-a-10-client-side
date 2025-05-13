import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { RiRefund2Line } from "react-icons/ri"; 
import { Link } from "react-router-dom"; 

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 text-black dark:text-white p-10">
      <div className="px-4 md:px-8 lg:px-16 footer lg:flex-row flex-col justify-between items-start gap-8">
        {/* Brand Section */}
        <div className="flex items-center gap-2">
          <RiRefund2Line className="text-[20px] text-orange-500" /> 
          <h1 className="text-[20px] text-orange-500 font-bold italic">CrowdCube</h1>
        </div>
        <p className="text-black dark:text-white max-w-sm ml-2">
          CrowdCube is a leading platform that connects investors with promising startup companies and projects.
        </p>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3 text-red-500">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li>
              <Link to="/about" className="hover:text-red-500">About Us</Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-red-500">Our Projects</Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-red-500">FAQs</Link>
            </li>
            <li>
              <Link to="/privacyPolicy" className="hover:text-red-500">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-red-500">Terms of Service</Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3 text-red-500">Follow Us</h6>
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500">
              <FaYoutube size={24} />
            </a>
          </div>
        </nav>
      </div>

      {/* Copyright */}
      <div className="text-center mt-6">
        <p className="lg:text-[14px] text-[13px]">
          Copyright © {new Date().getFullYear()} - All rights reserved by CrowdCube.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
