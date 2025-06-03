import React from "react";
import LogoHeader from "../HeaderComponent/LogoHeader";
import { CiLocationOn } from "react-icons/ci";
import { TbMailFast } from "react-icons/tb";
import { FiPhone } from "react-icons/fi";

const InfoFooter = () => {
  return (
    <>
      <div className="w-[440px]">
        <div className="flex flex-col justify-start items-start ">
          <div className="scale-75">
            <LogoHeader />
          </div>
        </div>
        <p className="mb-4">
          FoodTrove is the biggest market of grocery products. Get your daily
          needs from our store.
        </p>
        <div className="space-y-2">
          <p className="flex items-center">
            <span className="text-red-500 mr-2">
              <CiLocationOn />
            </span>
            Đường Hồ Gươm, Phường Hàng Trống, Quận Hoàn Kiếm, Thành phố Hà Nội,
            Việt Nam
          </p>
          <p className="flex items-center">
            <span className="text-red-500 mr-2">
              <TbMailFast />
            </span>
            <a href="mailto:example@email.com" className="hover:text-gray-800">
              example@email.com
            </a>
          </p>
          <p className="flex items-center">
            <span className="text-red-500 mr-2">
              <FiPhone />
            </span>
            <p className="hover:text-gray-800">+84 234 567 890</p>
          </p>
        </div>
      </div>
    </>
  );
};

export default InfoFooter;
