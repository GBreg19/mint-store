import React from "react";
import { useNavigate } from "react-router-dom";

const Nav = ({className}) => {
  const navigate = useNavigate();

  return (
    <ul
      className={`${className ? className : "lg:flex justify-between hidden"}`}
    >
      <li
        onClick={() => navigate("/")}
        className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
      >
        Home
      </li>
      <li
        onClick={() => navigate("/products")}
        className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
      >
        Products
      </li>
      <li
        onClick={() => navigate("/about-us")}
        className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
      >
        About Us
      </li>
      <li
        onClick={() => navigate("/contact")}
        className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
      >
        Contact
      </li>
    </ul>
  );
};

export default Nav;
