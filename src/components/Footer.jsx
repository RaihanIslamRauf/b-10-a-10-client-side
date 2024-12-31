import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { RiRefund2Line } from "react-icons/ri";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black p-10">
      <div className="footer lg:flex-row flex-col justify-between items-start gap-8">
        {/* Brand Section */}
        <div className="flex items-center gap-2">
          <RiRefund2Line className="text-[20px] text-orange-600" />
          <h1 className="text-[20px] text-orange-600 font-[300]">CrowdCube</h1>
        </div>

        {/* Quick Links */}
        <nav>
          <h6 className="footer-title text-center text-lg font-semibold mb-3">Quick Links</h6>
          <ul className="flex flex-col gap-2">
            <li><a href="#about" className="hover:text-orange-600">About Us</a></li>
            <li><a href="#projects" className="hover:text-orange-600">Our Projects</a></li>
            <li><a href="#faq" className="hover:text-orange-600">FAQs</a></li>
            <li><a href="#privacy" className="hover:text-orange-600">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-orange-600">Terms of Service</a></li>
          </ul>
        </nav>

        {/* Social Media Section */}
        <nav>
          <h6 className="footer-title text-center text-lg font-semibold mb-3">Follow Us</h6>
          <div className="flex flex-row items-center justify-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaInstagram size={24} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600">
              <FaYoutube size={24} />
            </a>
          </div>
        </nav>

        {/* Contact Us Section */}
        <nav>
          <h6 className="footer-title text-lg font-semibold mb-3">Contact Us</h6>
          <div className="flex flex-col gap-2">
            <p className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+1 800 123 4567</span>
            </p>
            <p className="flex items-center gap-2">
              <IoMail />
              <span>support@crowdcube.com</span>
            </p>
            <p>Address: 1234 Fundraiser Lane, Crowdtown, CT 56789</p>
          </div>
        </nav>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-6 font-sm">
        <p className="lg:text-[14px] text-[13px]">
          Copyright © {new Date().getFullYear()} - All rights reserved by CrowdCube.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
