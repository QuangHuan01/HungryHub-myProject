import React from "react";
import { FiDribbble } from "react-icons/fi";
import { BsSendFill } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  footerGallery1,
  footerGallery2,
  footerGallery3,
  footerGallery4,
  footerGallery5,
} from "../../assets/image/img";
import InfoFooter from "../../components/FooterComponent/InfoFooter";
import CompanyLink from "../../components/FooterComponent/CompanyLink";
import CategoryLink from "../../components/FooterComponent/CategoryLink";
import NewsletterSection from "./../../components/FooterComponent/NewsletterSection";

const FooterClient = () => {
  return (
    <div className="bg-gray-100 px-40 pt-28">
      <div className="flex justify-between">
        <div>
          <InfoFooter />
        </div>
        <div>
          <CompanyLink />
        </div>
        <div>
          <CategoryLink />
        </div>
        <div>
          <NewsletterSection />
        </div>
      </div>
      <div className="mt-28 text-center text-sm">
        <hr />
        <p className="py-5">
          &copy; 2025 <span className="text-red-600">Foodzy</span>. All rights
          reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterClient;
