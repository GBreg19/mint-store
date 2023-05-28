import React from "react";
import { Link, useLocation } from "react-router-dom";

const BreadCrumbs = () => {
  const location = useLocation();
  return (
    <nav>
      <nav>
        <Link
          to="/"
          className={`${
            location.pathname === "/"
              ? "text-red-500"
              : "text-green-500"
          }
          `}
        >
          Home
        </Link>
        <Link
          to="/products"
          className={
            location.pathname.startsWith("/products")
              ? "text-red-500"
              : "text-green-500"
          }
        >
          Products
        </Link>
        <Link
          to="/products/1"
          className={
            location.pathname === "/products/1"
              ? "text-red-500"
              : "text-green-500"
          }
        >
          Product 1
        </Link>
      </nav>
    </nav>
  );
};

export default BreadCrumbs;
