import React from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingBag } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../slices/cartSlice";

const NavBar = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between">
      <span onClick={() => navigate("/")} className="basis-1/12">
        <h1 className="font-robotoBold text-2xl cursor-pointer">Mint</h1>
      </span>
      <span className="basis-1/3 self-center">
        <ul className="w-full flex justify-between">
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
          >
            Home
          </li>
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
          >
            Products
          </li>
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
          >
            About Us
          </li>
          <li
            onClick={() => navigate("/")}
            className="cursor-pointer font-robotoBold hover:text-sky-500 duration-300"
          >
            Contact
          </li>
        </ul>
      </span>
      <span className="flex justify-between basis-1/12">
        <button>
          <FaUser className="text-xl hover:text-sky-500" />
        </button>
        <button>
          <FaHeart className="text-xl hover:text-sky-500" />
        </button>
        <button className="relative" onClick={() => dispatch(toggleCart(true))}>
          <FaShoppingBag className="text-xl hover:text-sky-500" />
          <span className="absolute px-1 text-xs text-white font-robotoBold bg-sky-500 rounded-full top-2 -translate-y-2/4 -right-2">
            {totalQuantity > 0 ? totalQuantity : ""}
          </span>
        </button>
      </span>
    </div>
  );
};

export default NavBar;
