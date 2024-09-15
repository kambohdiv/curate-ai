"use client";

import React from "react";

const Intro: React.FC = () => {
  return (
    <div className="relative bg-[#fdfff0] w-full h-auto lg:h-[1000px] lg:w-full">
      {/* Main Section */}
      <div className="flex flex-col items-center justify-center md:flex-row lg:justify-start relative lg:left-[101px] lg:top-[250px] px-4 md:px-8 lg:px-0 py-10 md:py-20 lg:py-0">
        {/* Left Section: SVG and Text */}
        <div className="flex flex-col items-start gap-4 lg:gap-6">
          {/* Rotated Background Block */}
          <div className="relative w-[80px] h-[85px] md:w-[120px] md:h-[130px] lg:w-[143.48px] lg:h-[149.35px] origin-top-left rotate-[55.01deg] bg-[#f3abcb] shadow" />

          {/* Text Section */}
          <div className="relative w-full max-w-xs md:max-w-lg lg:max-w-[618px]">
            <div className="absolute top-[70px] md:top-[100px] lg:top-[159px] left-1/2 transform -translate-x-1/2 w-[150px] h-[20px] md:w-[250px] md:h-[40px] lg:w-[341px] lg:h-11 bg-[#ffdc58]" />
            <div className="text-black text-[30px] md:text-[60px] lg:text-[80px] font-normal leading-tight font-['Space Grotesk']">
              I design ✍️ top
              <br />
              notch websites
            </div>
          </div>

          {/* Button and Squiggly Line */}
          <div className="relative w-full max-w-xs md:max-w-md lg:max-w-[352.95px] h-[90px] lg:h-[124.27px]">
            {/* See Portfolio Button */}
            <div className="flex justify-center items-center gap-2.5 absolute bg-[#b9e6fe] px-8 py-3 md:px-12 md:py-5 lg:px-16 lg:py-7 rounded-[70px] md:rounded-[80px] lg:rounded-[92px] border-4 md:border-6 lg:border-8 border-black">
              <div className="text-black text-[16px] md:text-[24px] lg:text-[29px] font-bold font-['Space Grotesk']">
                See Portfolio
              </div>
            </div>

            {/* Squiggly Line SVG */}
            <div className="absolute top-[80px] md:top-[120px] lg:top-[100px] right-[20px] md:right-[40px] lg:right-[0px] w-[38.55px] h-[81.23px] rotate-[10deg]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="77"
                height="90"
                viewBox="0 0 77 90"
                fill="none"
              >
                <path
                  d="M60.3123 14.6694C59.7245 13.7694 54.4704 13.0131 48.4493 12.8367C39.085 12.5918 37.5036 12.9529 36.9489 14.8558C35.3623 19.625 37.5631 20.6963 48.5088 20.5801C60.3783 20.2754 63.3684 18.8956 60.3123 14.6694Z"
                  fill="black"
                />
                <path
                  d="M42.8304 43.4147C31.2928 35.8191 27.7531 34.6938 28.0063 38.9529C28.1091 40.6832 32.0494 44.0554 39.8352 49.2026C46.3676 53.4893 52.0462 56.8917 52.7117 56.8521C53.2441 56.8205 53.6894 55.3248 53.5866 53.5945C53.4442 51.1987 50.7572 48.687 42.8304 43.4147Z"
                  fill="black"
                />
                <path
                  d="M28.5194 66.7433C22.4612 56.9521 15.2763 48.43 13.8676 49.4487C11.4336 51.1962 12.8767 55.2511 19.1062 63.4292C22.4523 68.0389 26.0803 72.8989 27.1069 74.4407C28.1335 75.9825 29.4105 77.2423 30.076 77.2027C32.8711 77.0366 32.2107 72.6681 28.5194 66.7433Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Section: Image Frame */}
        <div className="relative mt-8 md:mt-0 w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[512px] lg:h-[512px] shadow">
          {/* Placeholder for Image */}
          <div className="absolute w-full h-full bg-white" />
          <div className="absolute left-[20px] md:left-[40px] lg:left-[46px] top-[20px] md:top-[40px] lg:top-[54px] w-[160px] h-[160px] md:w-[300px] md:h-[300px] lg:w-[420px] lg:h-[404px] bg-[#484747]/20 border-4 border-black" />
        </div>
      </div>

      {/* Smiley and Arrow Section Above Frame */}
      <div className="absolute w-[150px] h-[100px] md:w-[200px] md:h-[150px] lg:w-[309.57px] lg:h-[183.69px] left-1/2 md:left-[500px] lg:left-[768px] top-[50px] md:top-[70px] lg:top-[100px] transform -translate-x-1/2">
        <div className="absolute w-[70px] h-[70px] md:w-[100px] md:h-[100px] lg:w-[130px] lg:h-[130px] origin-top-left rotate-[-42.626deg]">
          {/* Arrow SVG */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="130px"
            height="130px"
            viewBox="0 0 185 184"
            fill="none"
            className="rotate-[42.626deg]"
          >
            <g clipPath="url(#clip0_1_973)">
              <g filter="url(#filter0_d_1_973)">
                <path
                  d="M51.9138 75.0781L52.2368 76.0056C66.9188 73.8445 87.8175 77.0024 104.94 85.7571L105.167 85.3119L104.94 85.7571C115.093 90.9483 123.878 98.0698 129.307 107.133C134.728 116.183 136.825 127.202 133.557 140.252L133.556 140.253C133.471 140.594 133.124 140.804 132.781 140.719C132.439 140.633 132.229 140.284 132.315 139.94C135.495 127.239 133.424 116.475 128.077 107.628C122.738 98.7955 114.155 91.9077 104.355 86.8975C94.4663 81.8418 83.3059 78.6636 72.8543 77.3307C62.4102 75.9987 52.631 76.5039 45.5166 78.8547L45.5163 78.8548C45.1728 78.9685 44.9815 78.8908 44.8697 78.8153C44.7325 78.7228 44.6553 78.5884 44.6358 78.5491L44.6355 78.5485C44.6018 78.4812 44.5532 78.3621 44.5546 78.2271C44.5558 78.113 44.5916 77.9477 44.7997 77.7557L44.7996 77.7558C44.7996 77.7558 44.807 77.7493 44.826 77.7351C44.8458 77.7201 44.8726 77.7009 44.9072 77.6771C44.9765 77.6293 45.0686 77.569 45.1828 77.4967C45.4109 77.3522 45.715 77.1674 46.0755 76.9528C46.7958 76.524 47.7296 75.9833 48.7043 75.4234C49.3602 75.0467 50.0353 74.6607 50.6754 74.2949C51.9317 73.5768 53.0527 72.936 53.6272 72.5935C54.2999 72.1928 55.2599 71.6926 56.4078 71.0966L56.516 71.0404C57.6326 70.4607 58.9095 69.7978 60.2331 69.0653C62.96 67.5564 65.919 65.7345 68.1245 63.6985C69.3717 62.5484 70.4335 61.2944 70.9432 59.9495C71.4659 58.5704 71.3976 57.1185 70.4311 55.6617C69.4559 54.1905 67.9637 53.3674 66.1886 52.9926C64.4232 52.6198 62.3509 52.6832 60.1488 52.9982L60.1487 52.9982C54.5056 53.8062 47.8034 56.4305 42.0324 59.3212C36.2692 62.208 31.3546 65.4011 29.3089 67.39L29.3086 67.3903C29.0544 67.6378 28.6497 67.6314 28.4041 67.3791L28.404 67.379C28.1571 67.1254 28.1622 66.7208 28.4171 66.4724C30.4324 64.5121 35.4345 61.2352 41.4129 58.2326C47.3836 55.2339 54.2482 52.5495 59.9667 51.7309C65.3058 50.9666 69.477 51.9043 71.4982 54.9524C72.622 56.6471 72.798 58.2953 72.3181 59.8887C71.8305 61.5076 70.6526 63.1095 68.9924 64.6405L68.9923 64.6406C66.8183 66.6468 63.8698 68.481 61.0874 70.0331C59.7227 70.7943 58.4058 71.4835 57.247 72.0899L57.1873 72.1211C56.0205 72.7318 55.0061 73.2633 54.2849 73.6933C53.8219 73.9679 52.9408 74.4842 51.9138 75.0781Z"
                  fill="black"
                  stroke="black"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className="absolute w-[90px] h-[50px] md:w-[130px] md:h-[70px] lg:w-[146.59px] lg:h-[69.49px] left-0 top-[20px] md:top-[40px] lg:top-[25.88px] origin-top-left rotate-[-6.96deg]">
          {/* Smiley Face and Zainab Text */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="31.949px"
            height="29.274px"
            viewBox="0 0 37 35"
            fill="none"
            className="absolute left-[5px] md:left-[8px] top-[30px] md:top-[35px] lg:left-[8px] lg:top-[40px] rotate-[0deg]"
          >
            <path
              d="M19.5479 4.4031C18.6713 5.80238 19.9271 9.81219 21.7001 11.2897C23.0602 12.3947 24.0665 11.888 24.3315 9.94798C24.6359 7.90326 23.1377 5.00064 21.4323 4.27109C20.1328 3.70088 19.9764 3.72964 19.5479 4.4031Z"
              fill="black"
            />
            <path
              d="M7.84038 5.33376C6.96374 6.73304 8.21957 10.7429 9.99262 12.2204C11.3527 13.3254 12.359 12.8186 12.624 10.8786C12.9284 8.83392 11.4302 5.9313 9.72476 5.20175C8.42528 4.63154 8.26883 4.66031 7.84038 5.33376Z"
              fill="black"
            />
            <path
              d="M2.88193 16.7075C3.24136 18.9226 7.35405 23.0018 11.0101 24.7375C12.1376 25.3003 14.0826 25.7031 15.8021 25.7769C18.5025 25.8751 18.8859 25.7851 22.3741 24.1786C25.7215 22.637 26.2387 22.2689 27.844 20.4042C29.889 17.9907 31.8424 12.8058 31.2223 11.3601C30.6796 10.095 29.8918 10.7176 28.3133 13.8252C26.5656 17.2272 25.5918 18.4981 23.558 19.9541C21.6144 21.3254 17.9796 22.3934 15.6935 22.2776C12.9776 22.1433 7.87127 19.3874 5.0947 16.5541C3.68105 15.1275 2.64514 15.1717 2.88193 16.7075Z"
              fill="black"
            />
          </svg>
          <div className="absolute left-[30px] md:left-[35px] lg:left-[40.75px] top-[15px] md:top-[20px] lg:top-[28.31px] origin-top-left rotate-[-16.45deg] text-black text-[18px] md:text-[24px] lg:text-[29px] font-bold font-['Space Grotesk']">
            ZAINAB
          </div>
        </div>
      </div>

      {/* Bottom Left Decorative SVG */}
      <div className="absolute bottom-0 left-0 w-[90px] h-[90px] md:w-[120px] md:h-[120px] lg:w-[151px] lg:h-[127.684px]">
        {/* Decorative SVG */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="84"
          height="136"
          viewBox="0 0 84 136"
          fill="none"
        >
          <g filter="url(#filter0_d_1_917)">
            <path
              d="M-2.4321 22.5903V45.1805L-14.2183 39.2874C-20.7007 36.1444 -26.7902 33.3943 -27.9689 33.3943C-32.4869 33.3943 -29.3439 39.4838 -20.8971 46.9484C-14.8076 52.2522 -12.6468 55.1987 -14.4147 55.788C-15.9862 56.3773 -27.576 59.5203 -40.5408 62.6633C-64.7025 68.5564 -69.6134 71.1101 -65.8811 74.8424C-64.5061 76.2174 -55.0771 75.6281 -34.0584 72.4852C-17.5577 70.1279 -3.61071 68.7529 -3.0214 69.3422C-2.4321 70.1279 -5.77152 77.0032 -10.2896 84.8607C-15.004 92.7181 -18.9328 99.7898 -19.3256 100.379C-19.7185 101.165 -18.7363 102.736 -17.3613 103.915C-15.004 105.879 -13.0397 104.897 -6.7537 99.397C-2.4321 95.4682 1.88951 92.3252 2.87169 92.3252C3.85387 92.3252 5.81824 98.2183 7.38973 105.487C10.7292 122.38 13.0864 127.684 17.408 127.684C22.7118 127.684 23.694 121.594 22.1225 99.0041C21.3367 87.6108 21.3367 78.5747 22.3189 78.5747C23.3011 78.5747 31.1586 81.7177 39.8018 85.45C56.8918 92.9146 62.392 93.8967 62.392 89.5751C62.392 85.6464 59.249 82.8963 44.1234 72.4852C36.8552 67.7707 30.9621 63.2526 30.9621 62.6633C30.9621 62.074 40.9804 58.7346 53.1595 55.1987C74.9639 48.9128 84 44.7876 84 41.2517C84 38.3052 71.6245 38.8945 51.9808 42.4304C42.5519 44.1983 34.1051 45.1805 33.5158 44.3947C32.9265 43.8054 34.3015 38.6981 36.6588 33.1978C45.4984 11.7862 39.9982 9.82188 26.2476 29.662C21.1403 37.323 16.0329 42.8232 15.2472 41.841C14.4614 41.0553 12.3007 33.1978 10.3363 24.5546C6.40755 6.08958 3.85387 4.57764e-05 0.121582 4.57764e-05C-1.84279 4.57764e-05 -2.4321 5.1074 -2.4321 22.5903Z"
              fill="#F3ABCB"
              stroke="#000"
              strokeWidth="2"
              filter="drop-shadow(0px 7.765px 0px #BEBFB4)"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1_917"
              x="-67"
              y="6.10352e-05"
              width="151"
              height="135.448"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feOffset dy="7.76457" />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1_917"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1_917"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Intro;
