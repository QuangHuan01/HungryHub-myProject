import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets/image/img";

const HeaderClient = () => {
  return (
    <>
      <div>
        <img src={logo} alt="" />
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
};

export default HeaderClient;
