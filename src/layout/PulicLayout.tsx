import React from "react";
import HeaderClient from "./../pages/client/HeaderClient";
import { Outlet } from "react-router-dom";
import FooterClient from "../pages/client/FooterClient";

const PulicLayout = () => {
  return (
    <>
      <HeaderClient />
      <div className="pt-40">
        <Outlet />
      </div>
      <FooterClient />
    </>
  );
};

export default PulicLayout;
