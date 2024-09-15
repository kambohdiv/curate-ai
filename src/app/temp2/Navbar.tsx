"use client";

import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="relative p-4 md:p-[22px] bg-white shadow-md border-4 border-black flex justify-between items-center">
      {/* Four small squares in the corners */}
      <div className="absolute w-3.5 h-3.5 bg-white border-2 border-black left-[-7px] top-[-7px]" />
      <div className="absolute w-3.5 h-3.5 bg-white border-2 border-black right-[-7px] top-[-7px]" />
      <div className="absolute w-3.5 h-3.5 bg-white border-2 border-black left-[-7px] bottom-[-7px]" />
      <div className="absolute w-3.5 h-3.5 bg-white border-2 border-black right-[-7px] bottom-[-7px]" />

      {/* Star + znis logo */}
      <div className="flex justify-center items-center gap-4 relative">
        {/* Star SVG */}
        <div className="flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 50 49"
            fill="none"
            className="w-9 h-9 md:w-12 md:h-12"
          >
            <path
              d="M24.9778 49C26.5743 49 27.8824 47.825 28.1041 46.162C30.299 31.3511 32.3167 29.2892 46.5513 27.6707C48.1918 27.4711 49.4557 26.0965 49.4557 24.5001C49.4557 22.8814 48.2141 21.5512 46.5733 21.3073C32.4276 19.334 30.6761 17.6045 28.1041 2.81596C27.8158 1.17521 26.552 0 24.9778 0C23.3594 0 22.0732 1.17521 21.8073 2.83801C19.6566 17.6268 17.639 19.6888 3.42667 21.3073C1.74159 21.5291 0.5 22.8594 0.5 24.5001C0.5 26.0965 1.69726 27.4268 3.38234 27.6707C17.5501 29.6883 19.2795 31.3955 21.8073 46.1843C22.1398 47.8471 23.4257 49 24.9778 49Z"
              fill="#0C0C0C"
            />
          </svg>
        </div>

        {/* znis Text */}
        <div className="text-[#0c0c0c] text-2xl md:text-4xl font-normal font-['Space Grotesk']">
          znis
        </div>
      </div>

      {/* Navigation Links Container */}
      <div className="hidden md:flex items-start gap-[32px]">
        {/* About // */}
        <div className="text-[#0c0c0c] text-lg md:text-2xl font-medium font-['Space Grotesk']">
          About //
        </div>

        {/* Portfolio */}
        <div className="text-[#0c0c0c] text-lg md:text-2xl font-medium font-['Space Grotesk']">
          Portfolio
        </div>

        {/* Hire Me */}
        <div className="text-[#0c0c0c] text-lg md:text-2xl font-medium font-['Space Grotesk']">
          Hire Me
        </div>
      </div>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button className="text-[#0c0c0c] text-2xl focus:outline-none">
          &#9776; {/* Hamburger icon */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
