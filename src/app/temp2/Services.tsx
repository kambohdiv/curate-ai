"use client";

import React from "react";

const Services: React.FC = () => {
  return (
    <div className="bg-[#FEFFF0] w-full pt-8 md:pt-16 lg:pt-24 pb-12">
      {/* Heading with Smiley Face SVG */}
      <div className="flex flex-col md:flex-row justify-center md:justify-start items-center mb-10 px-5 md:px-12 lg:px-24 pb-2 md:pb-6 lg:pb-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-black text-3xl md:text-5xl font-medium font-['Space Grotesk'] text-center md:text-left">
            Services we’re providing <br /> that derive 99% result
          </div>
          {/* Smiling Face SVG */}
          <div className="mt-4 md:mt-0 ml-0 md:ml-4 w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[64px] lg:h-[64px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 73 69"
              fill="none"
              className="rotate-[8.96deg]"
            >
              <path
                d="M38.6181 8.36637C36.8542 11.1818 39.3811 19.2499 42.9486 22.2228C45.6852 24.4461 47.71 23.4265 48.2431 19.5231C48.8556 15.409 45.841 9.56867 42.4096 8.10076C39.795 6.95345 39.4802 7.01133 38.6181 8.36637Z"
                fill="black"
              />
              <path
                d="M15.0585 10.239C13.2947 13.0544 15.8215 21.1225 19.389 24.0953C22.1256 26.3187 24.1504 25.2991 24.6835 21.3957C25.296 17.2816 22.2814 11.4413 18.8501 9.97335C16.2354 8.82604 15.9206 8.88392 15.0585 10.239Z"
                fill="black"
              />
              <path
                d="M5.08328 33.1238C5.80646 37.5808 14.0815 45.7884 21.4377 49.2808C23.7064 50.4133 27.6199 51.2237 31.0796 51.3722C36.5131 51.5697 37.2844 51.3886 44.3031 48.1562C51.0382 45.0543 52.0789 44.3137 55.3089 40.5618C59.4237 35.7056 63.354 25.2734 62.1062 22.3644C61.0144 19.819 59.4292 21.0716 56.2531 27.3244C52.7367 34.1694 50.7772 36.7266 46.6851 39.6563C42.7745 42.4153 35.4609 44.5643 30.8612 44.3312C25.3965 44.061 15.1222 38.516 9.53555 32.8151C6.69117 29.9447 4.60683 30.0337 5.08328 33.1238Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 px-5 md:px-12 lg:px-24 border-t-2 border-b-2 border-black">
        {/* Column 1 - Stats */}
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div className="w-full h-[181px] pl-[21px] pr-[40px] py-[41px] border-b-2 border-black flex flex-col items-start">
            <div className="text-black text-5xl font-medium font-['Space Grotesk']">
              39
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              Projects
            </div>
          </div>

          <div className="w-full h-[181px] pl-[21px] pr-[40px] py-[41px] border-b-2 border-black flex flex-col items-start">
            <div className="text-black text-5xl font-medium font-['Space Grotesk']">
              100k+
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              generated
            </div>
          </div>
        </div>

        {/* Column 2 - User Research, UI Designing, Learn More */}
        <div className="flex flex-col border-l-0 md:border-l-2 border-black">
          <div className="h-[336px] pl-[26px] pr-[40px] py-[60px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[70px] h-[70px] pl-3.5 pr-[13.43px] pt-[17px] pb-4 bg-[#ffdc58] rounded-[50px] border-2 border-black justify-center items-center flex">
              <div className="w-[42.57px] h-[37px]" />
            </div>
            <div className="text-black text-4xl font-bold font-['Space Grotesk']">
              User Research
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              Services we’re providing that derive 99% result
            </div>
          </div>

          <div className="h-[108px] pl-[26px] pr-[40px] py-[31px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[331px] text-black text-4xl font-medium font-['Space Grotesk']">
              Learn more
            </div>
          </div>

          <div className="h-[336px] pl-[26px] pr-[40px] py-[60px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[70px] h-[70px] px-5 pt-[13px] pb-[12.65px] bg-[#ff6258] rounded-[50px] border-2 border-black justify-center items-center flex">
              <div className="w-[30px] h-[44.35px]" />
            </div>
            <div className="text-black text-4xl font-bold font-['Space Grotesk']">
              UI Designing
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              Services we’re providing that derive 99% result
            </div>
          </div>

          <div className="h-[108px] pl-[26px] pr-[40px] py-[31px] border-b-2 md:border-b-0 lg:border-b-0 border-black flex flex-col justify-start items-start">
            <div className="w-[331px] text-black text-4xl font-medium font-['Space Grotesk']">
              Learn more
            </div>
          </div>
        </div>

        {/* Column 3 - Wireframing, Prototyping, Learn More */}
        <div className="flex flex-col border-l-0 md:border-l-2 border-black">
          <div className="h-[336px] pl-[26px] pr-[40px] py-[60px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[70px] h-[70px] px-[11px] pt-2 pb-[7.22px] bg-[#c5a1ff] rounded-[50px] border-2 border-black justify-center items-center flex">
              <div className="w-12 h-[54.78px]" />
            </div>
            <div className="text-black text-4xl font-bold font-['Space Grotesk']">
              Wireframing
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              Services we’re providing that derive 99% result
            </div>
          </div>

          <div className="h-[108px] pl-[26px] pr-[40px] py-[31px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[331px] text-black text-4xl font-medium font-['Space Grotesk']">
              Learn more
            </div>
          </div>

          <div className="h-[336px] pl-[26px] pr-[40px] py-[60px] border-b-2 border-black flex flex-col justify-start items-start">
            <div className="w-[70px] h-[70px] pl-3 pr-[12.27px] pt-4 pb-[15.33px] bg-[#61bcff] rounded-[50px] border-2 border-black justify-center items-center flex">
              <div className="w-[45.73px] h-[38.67px]" />
            </div>
            <div className="text-black text-4xl font-bold font-['Space Grotesk']">
              Prototyping
            </div>
            <div className="text-black text-2xl font-medium font-['Space Grotesk']">
              Services we’re providing that derive 99% result
            </div>
          </div>

          <div className="h-[108px] pl-[26px] pr-[40px] py-[31px] border-b-0 lg:border-b-0 border-black flex flex-col justify-start items-start">
            <div className="w-[331px] text-black text-4xl font-medium font-['Space Grotesk']">
              Learn more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
