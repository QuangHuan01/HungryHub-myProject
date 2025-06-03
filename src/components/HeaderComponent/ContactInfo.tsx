import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const ContactInfo = () => {
  return (
    <Link
      to="/account"
      className="flex items-center inline-block text-black hover:text-blue-600 font-semibold text-lg transition-colors duration-300"
    >
      <span className="mr-1">
        <FaPhoneAlt />
      </span>
      <span className="ml-2">+84 234 567 890</span>
    </Link>
  );
};

export default ContactInfo;
