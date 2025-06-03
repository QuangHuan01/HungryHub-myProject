import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiDribbble } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import {
  footerGallery1,
  footerGallery2,
  footerGallery3,
  footerGallery4,
  footerGallery5,
} from "../../assets/image/img";

const NewsletterSection = () => {
  return (
    <>
      <div>
        <div className=" items-start text-left mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Subscribe Our Newsletter
          </h3>
          <div className="flex justify-start items-start max-w-md">
            <input
              type="email"
              placeholder="Search here..."
              className="flex-1 p-3 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-3 h-12 w-12 bg-white text-black rounded-r-md rounded-r-md flex justify-center items-center">
              <BsSendFill />
            </button>
          </div>
        </div>
        <div className="flex justify-start mb-5 gap-1">
          <button className="p-1 border rounded">
            <FaFacebookF />
          </button>
          <button className="p-1 border rounded">
            <FaXTwitter />
          </button>
          <button className="p-1 border rounded">
            <FiDribbble />
          </button>
          <button className="p-1 border rounded">
            <FaInstagram />
          </button>
        </div>
        <div className="flex gap-4">
          <img
            src={footerGallery1}
            alt="Image 1"
            className=" h-24 object-cover rounded-md"
          />
          <img
            src={footerGallery2}
            alt="Image 2"
            className=" h-24 object-cover rounded-md"
          />
          <img
            src={footerGallery3}
            alt="Image 3"
            className=" h-24 object-cover rounded-md"
          />
          <img
            src={footerGallery4}
            alt="Image 4"
            className=" h-24 object-cover rounded-md"
          />
          <img
            src={footerGallery5}
            alt="Image 5"
            className=" h-24 object-cover rounded-md"
          />
        </div>
      </div>
    </>
  );
};

export default NewsletterSection;
