import React from "react";
import { Link } from "react-router-dom";

const HeaderAdmin = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/admin/dashboard">DashBoard</Link>
        </li>
        <li>
          <Link to="/admin/user">User</Link>
        </li>
        <li>
          <Link to="/admin/setting">Setting</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderAdmin;
