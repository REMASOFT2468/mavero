import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Mavero</h2>
          <p className="text-gray-400 max-w-sm">
            Connecting you with trusted and skilled technicians for fast,
            reliable household repairs.
          </p>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li>
              Email: <span className="text-white">support@mavero.com</span>
            </li>
            <li>
              Phone: <span className="text-white">+234 80 6998 9771</span>
            </li>
            <li>Location: Port Harcout, Nigeria</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex items-center gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaFacebookF />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaInstagram />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaTwitter />
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-10 text-sm">
        © {new Date().getFullYear()} Mavero. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
