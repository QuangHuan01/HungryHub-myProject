import React from "react";
import { ChooseUsImg } from "../../assets/image/img";
import { FaHamburger, FaShippingFast } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";

const ChooseUsComponent = () => {
  return (
    <>
      <div className="flex gap-7 items-center justify-center p-6 bg-white mb-24">
        <div className="w-auto p-4">
          <img
            src={ChooseUsImg}
            alt="Delicious Meal"
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="flex flex-col space-y-12 items-start w-[600px] p-4">
          <h2 className=" text-5xl font-bold text-gray-800 mb-4">
            Why People Choose us?
          </h2>
          <div className="flex flex-col space-y-14">
            <div className="flex items-center shadow-lg p-4 rounded-2xl">
              <span className="inline-flex items-center justify-center w-10 h-10 text-7xl mr-6 text-yellow-500 ">
                <FaShippingFast />
              </span>
              <div>
                <h3 className="text-3xl font-semibold text-black mb-2">
                  Convenient and Reliable
                </h3>
                <p className="text-gray-600">
                  Whether you dine in, take out, or order delivery, our service
                  is convenient, fast, and reliable, making mealtime
                  hassle-free.
                </p>
              </div>
            </div>
            <div className="flex items-center shadow-lg p-4 rounded-2xl">
              <span className="inline-flex items-center justify-center text-7xl w-10 h-10 mr-6 text-yellow-500">
                <MdRestaurantMenu />
              </span>
              <div>
                <h3 className="text-3xl font-semibold text-black mb-2">
                  Variety of Options
                </h3>
                <p className="text-gray-600">
                  From hearty meals to light snacks, we offer a wide range of
                  options to suit every taste and craving.
                </p>
              </div>
            </div>
            <div className="flex items-center shadow-lg p-4 rounded-2xl">
              <span className="inline-flex items-center justify-center text-7xl w-10 h-10 mr-6 text-yellow-500">
                <FaHamburger />
              </span>
              <div>
                <h3 className="text-3xl font-semibold text-black mb-2">
                  Eat Burger
                </h3>
                <p className="text-gray-600">
                  Our burgers are grilled to perfection, with juicy patties and
                  flavorful toppings that make every bite a delicious
                  experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChooseUsComponent;
