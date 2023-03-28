import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import { FaReact } from "react-icons/fa";
import Button from "../UI/Button";
import HeaderCartBtn from "./HeaderCartBtn";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={classes.nav_bar}>
        <span className={classes.logo}>
          <span className="text-sky-400 text-3xl cursor-pointer">
            <FaReact />
          </span>
        </span>
        <span className={classes.nav}>
          <ul>
            <li onClick={() => navigate("/")}>Home Page</li>
            <li onClick={() => navigate("/product-add")}>Add Page</li>
          </ul>
        </span>
        <span className={classes.header_btns}>
          <Button>Login</Button>
          <HeaderCartBtn />
        </span>
      </div>
      <div className={classes.bg_img}></div>
    </div>
  );
};

export default Header;
