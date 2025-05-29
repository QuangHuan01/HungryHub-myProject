import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Trang Không Tồn Tại</h1>
      <Link to="/">Quay lại trang chủ</Link>
    </div>
  );
};

export default NotFound;
