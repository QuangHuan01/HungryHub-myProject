import React from "react";
import { logo } from "../../assets/image/img";

const LogoHeader = () => {
  return (
    <>
      <div className=" flex items-center">
        <img
          src={logo}
          alt="Logo"
          className="h-24 w-20 rounded-full object-cover"
        />
        <div>
          <p className="font-black text-2xl leading-none ml-1">Foodzy</p>
          <span className="leading-none text-xs">A Treasure of Tastes</span>
        </div>
      </div>
    </>
  );
};

export default LogoHeader;
