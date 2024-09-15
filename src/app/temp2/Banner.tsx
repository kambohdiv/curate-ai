"use client";

import React from "react";

const Banner: React.FC = () => {
  return (
    <div className="bg-black border-2 py-6 px-4 md:px-16 lg:px-32 h-auto md:h-[139px] flex flex-col justify-center items-center gap-4 md:gap-6 lg:gap-2.5">
      {/* Flex container for the text items */}
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8 md:gap-[113px]">
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-medium font-['Space Grotesk']">Figma</div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-medium font-['Space Grotesk']">Framer</div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-medium font-['Space Grotesk']">Webflow</div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-medium font-['Space Grotesk']">Notion</div>
        <div className="text-white text-3xl md:text-4xl lg:text-5xl font-medium font-['Space Grotesk']">Lottie</div>
      </div>
    </div>
  );
};

export default Banner;
