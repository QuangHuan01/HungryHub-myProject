import React from "react";
import HeroSection from "./HeroSection";
import FeaturedSectionComponent from "../../components/HomeComponent/FeaturedSectionComponent";
import ChooseUsComponent from "./../../components/HomeComponent/ChooseUsComponent";

const HomeClient = () => {
  return (
    <>
      <HeroSection />
      <FeaturedSectionComponent />
      <ChooseUsComponent />
    </>
  );
};

export default HomeClient;
