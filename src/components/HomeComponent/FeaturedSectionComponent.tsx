import React from "react";
import { swimg } from "../../assets/image/img";

const FeaturedSectionComponent = () => {
  return (
    <div className="text-center ">
      <span className="text-red-600 text-xl font-bold leading-5">
        Customer Favorites
      </span>
      <h2 className="text-6xl font-bold mt-6 mb-20">Popular Catagories</h2>
      <div className="flex justify-center gap-16 mb-36">
        <div className="bg-gray-50 pt-8 pb-16 px-14 py-12 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              src={swimg}
              alt="Main Dish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Main Dish
          </h3>
          <p className="text-gray-600 text-sm">(86 dishes)</p>
        </div>
        <div className="bg-gray-50 pt-8 pb-16 px-14 py-12 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              src={swimg}
              alt="Main Dish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Break Fast
          </h3>
          <p className="text-gray-600 text-sm">(12 break fast)</p>
        </div>
        <div className="bg-gray-50 pt-8 pb-16 px-14 py-12 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              src={swimg}
              alt="Main Dish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Dessert</h3>
          <p className="text-gray-600 text-sm">(48 dessert)</p>
        </div>
        <div className="bg-gray-50 pt-8 pb-16 px-14 py-12 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              src={swimg}
              alt="Main Dish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Browse All
          </h3>
          <p className="text-gray-600 text-sm">(255 Items)</p>
        </div>
        <div className="bg-gray-50 pt-8 pb-16 px-14 py-12 rounded-lg shadow-md hover:shadow-2xl transition-shadow duration-300">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <img
              src={swimg}
              alt="Main Dish"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            Breakfast Food
          </h3>
          <p className="text-gray-600 text-sm">(205 Items)</p>
        </div>
      </div>
    </div>
  );
};

export default FeaturedSectionComponent;
