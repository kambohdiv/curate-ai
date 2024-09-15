"use client";

import React from "react";
import Header from "@/app/temp2/Header";
import Intro from "../temp2/Intro2";
import Banner from "@/app/temp2/Banner";
import Services from "../temp2/Services";

const Portfolio2Page: React.FC = () => {
  return (
    <div className="bg-[#FEFFF0]">
      <Header />
      <Intro />
      <Banner />
      <Services />
    </div>
  );
};

export default Portfolio2Page;
