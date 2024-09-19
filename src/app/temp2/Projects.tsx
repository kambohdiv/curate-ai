"use client";

import React from "react";

const Projects: React.FC = () => {
  return (
    <div className="bg-[#FEFFF0] w-full py-6 md:py-10 lg:py-8">
      {/* Portfolio Header */}
      <div className="relative w-full max-w-4xl mx-auto px-5 md:px-0 text-center">
        {/* My Portfolio Heading */}
        <div className="relative inline-block">
          <div className="text-black text-[40px] md:text-[60px] lg:text-[80px] font-normal font-['Space Grotesk']">
            My Portfolio
          </div>

          {/* Sunny SVG */}
          <div className="absolute right-[-80px] hidden md:block md:right-[-100px] lg:right-[-180px] top-0 w-[60px] h-[60px] md:w-[80px] md:h-[80px] lg:w-[112.83px] lg:h-[117.44px] bg-[#bae6ff] rotate-[55deg] shadow-md"></div>
        </div>

        {/* Underlining SVG */}
        <div className="w-[240px] md:w-[358px] h-[10px] mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 358 15"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M355.698 8.90703C285.182 1.05767 213.473 5.39925 142.78 3.98596C96.0339 3.04038 49.2843 0.762796 2.57201 0.000228063C1.17151 -0.0201071 0.0196797 1.32197 0.000228214 3.00979C-0.0183775 4.69761 1.10303 6.08044 2.50269 6.10077C49.2099 6.86334 95.9544 9.14092 142.695 10.0865C213.262 11.4998 284.835 7.14802 355.224 14.9872C356.619 15.1397 357.854 13.9095 357.989 12.2318C358.116 10.5542 357.085 9.06971 355.698 8.90703Z"
              fill="black"
            />
          </svg>
        </div>
      </div>

      {/* Portfolio Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 px-5 md:px-12 lg:px-24">
        {/* Portfolio Card */}
        {[1, 2, 3, 4].map((_, index) => (
          <div
            key={index}
            className="w-full md:w-[536px] h-[536px] bg-white border border-black relative shadow-lg"
          >
            {/* Four Borders (Lines) */}
            <div className="absolute w-full h-[9px] top-0 left-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                viewBox="0 0 575 9"
                fill="none"
              >
                <path
                  d="M467.799 3.71803C555.155 3.71803 542.955 3.71803 571.656 3.71803C571.163 4.00394 566.712 5.09767 564.876 5.31922C562.58 5.59616 502.354 5.44504 489.501 5.44504C445.501 5.44504 246.735 4.41181 233.726 4.41181"
                  stroke="black"
                  strokeWidth="6.28125"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* Image Container */}
            <div className="w-[463.77px] h-[293.12px] mx-auto mt-8 bg-[#e4bfbf]/5 border-4 border-black"></div>

            {/* Card Description */}
            <div className="flex justify-between items-start px-6 py-4">
              <div className="flex flex-col">
                <div className="text-black text-4xl font-bold font-['Space Grotesk']">
                  Portfolio design
                </div>
                <div className="text-black text-2xl font-medium font-['Space Grotesk']">
                  UI design - User research -<br /> webflow develop
                </div>
              </div>

              {/* Arrow Icon */}
              <div className="w-[38px] h-[38px] bg-black shadow-md flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 25 25"
                  fill="none"
                >
                  <path
                    d="M18.3751 5.31045L19.0486 16.6049M18.3751 5.31045L7.08066 5.98398M18.3751 5.31045L5.98405 19.2731"
                    stroke="#FDFDFD"
                    strokeWidth="2.40017"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
