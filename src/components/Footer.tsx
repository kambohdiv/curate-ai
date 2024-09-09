import React from "react";
import { FaLinkedin, FaInstagram } from "react-icons/fa"; // Icons for social links

const Footer = () => {
  return (
    <footer className="bg-[#1B1B1B] text-white py-10 px-4 md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Brand & Quick Links */}
        <div>
          <h2 className="text-2xl font-semibold">
            CurateAI. <span className="block text-xl">suite</span>
          </h2>
          <ul className="mt-4 space-y-2">
            <li className="text-gray-400">
              <a href="#">About</a>
            </li>
            <li className="text-gray-400">
              <a href="#">How it works</a>
            </li>
            <li className="text-gray-400">
              <a href="#">Services</a>
            </li>
            <li className="text-gray-400">
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact with us</h3>
          <p className="text-gray-400">
            <span className="block">Address:</span>
            5123 Market St. #22B <br />
            Charlottesville, California 44635
          </p>
          <p className="mt-4 text-gray-400">
            <span className="block">Email:</span>
            hello@mentopreneursuit.com
          </p>
          <p className="mt-2 text-gray-400">
            <span className="block">Office phone:</span>
            +1 (2345) 678-90-12
          </p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col items-start lg:items-end">
          <h3 className="text-lg font-semibold mb-4">Follow us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="text-white bg-gray-700 p-3 rounded-full hover:bg-gray-500 transition"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col lg:flex-row justify-between text-gray-500 text-sm">
        <p>&copy; 2024 CurateAI Suite</p>
        <div className="flex space-x-4 mt-4 lg:mt-0">
          <a href="#" className="hover:underline">
            Terms of Service
          </a>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
