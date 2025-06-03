import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

const UserNav = () => {
  return (
    <>
      <div className="flex items-center gap-5 space-x-4">
        <Link
          to="/account"
          className="flex items-center inline-block text-black hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
        >
          <span className="mr-1">
            <MdOutlineAccountCircle />
          </span>
          Account
        </Link>
        <Link
          to="/wishlist"
          className="flex items-center inline-block text-black hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
        >
          <span className="mr-1">
            <FaRegHeart />
          </span>
          Wish List
        </Link>
        <Link
          to="/cart"
          className="flex items-center inline-block text-black hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
        >
          <span className="mr-1">
            <FaCartShopping />
          </span>
          Cart
        </Link>
      </div>
    </>
  );
};

export default UserNav;
