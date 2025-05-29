import React from "react";
import HeaderAdmin from "../pages/admin/HeaderAdmin";
import { Outlet } from "react-router-dom";
import FooterAdmin from "../pages/admin/FooterAdmin";

const PrivateLayout = () => {
  return (
    <>
      <HeaderAdmin />
      <main>
        <Outlet />
      </main>
      <FooterAdmin />
    </>
  );
};

export default PrivateLayout;
