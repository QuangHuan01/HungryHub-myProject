import React from "react";
import { BiBell, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <>
      <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm sticky top-0 z-10">
        <div className="text-xl font-bold text-blue-600">Admin Panel</div>
        <div className="relative w-1/2 hidden md:block">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            className="w-full pl-10 pr-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <BiSearch className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
        </div>

        <div className="flex items-center gap-4">
          <button className="relative">
            <BiBell className="w-6 h-6 text-gray-600 hover:text-blue-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              3
            </span>
          </button>
          <div className="w-9 h-9 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-semibold">
            A
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderAdmin;
