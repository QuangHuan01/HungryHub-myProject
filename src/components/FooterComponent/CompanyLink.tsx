import React from "react";
import { Link } from "react-router-dom";

const CompanyLink = () => {
  return (
    <>
      <div className="p-6 text-gray-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link to="" className="hover:text-black">
              About Us
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Delivery Information
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Terms & Condition
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Support Center
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CompanyLink;
