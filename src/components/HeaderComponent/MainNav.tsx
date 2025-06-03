import React from "react";
import { Link } from "react-router-dom";

const MainNav = () => {
  return (
    <div>
      <ul className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 ">
        <li>
          <Link
            to="/"
            className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/menu"
            className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
          >
            Menu
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
          >
            Contact
          </Link>
        </li>
        <li>
          <Link
            to="/auth/login"
            className="text-gray-600 hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
          >
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNav;
