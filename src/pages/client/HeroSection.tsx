import React from "react";
import { hero } from "../../assets/image/img";

const HeroSection = () => {
  return (
    <div>
      <img src={hero} alt="" className="w-full h-full mb-20" />
    </div>
  );
};

export default HeroSection;
