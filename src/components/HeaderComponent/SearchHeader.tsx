import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchHeader = () => {
  return (
    <>
      <div className="flex items-center w-full max-w-md focus:outline-none focus:ring-2 focus:ring-blue-500">
        <input
          type="text"
          placeholder="Search for items..."
          className="flex-1 h-11 w-[400px] p-2 border border-teal-500 rounded-l-md inline-block focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
        />
        <select className="p-2 border w-36 h-11 inline-block border-teal-500  bg-white text-gray-900 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-teal-500">
          <option>All Categories</option>
        </select>
        <button className="h-11 w-11 flex items-center justify-center border inline-block rounded-r-md bg-gray-800 border-gray-800 text-white">
          <span>
            <IoSearch />
          </span>
        </button>
      </div>
    </>
  );
};

export default SearchHeader;
