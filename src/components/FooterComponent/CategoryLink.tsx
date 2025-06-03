import React from "react";
import { Link } from "react-router-dom";

const CategoryLink = () => {
  return (
    <>
      <div className="p-6 text-gray-600">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Category</h3>
        <ul className="space-y-2">
          <li>
            <Link to="" className="hover:text-black">
              Dairy & Bakery
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Fruits & Vegetable
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Snack & Spice
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Juice & Drinks
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Chicken & Meat
            </Link>
          </li>
          <li>
            <Link to="" className="hover:text-black">
              Fast Food
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CategoryLink;
