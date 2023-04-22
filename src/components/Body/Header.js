import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../slices/cartSlice";
import Container from "../UI/Container";

const Header = () => {
  const navigate = useNavigate();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="border-b-[1px] border-black/10 pb-10">
        <h1
          onClick={() => navigate("/")}
          className="font-dancBold text-5xl cursor-pointer text-center tracking-wider"
        >
          Mint
        </h1>
      </div>
      <div
        className={`grid grid-cols-12 self-center pt-10 ${
          isFixed
            ? "fixed top-0 left-[50%] translate-x-[-50%] py-10 w-9/12 px-40 z-30 bg-white border-b-[1px] border-black/10"
            : ""
        }`}
      >
        {/* first col  */}
        <div className="lg:col-span-4 md:col-span-6 self-center">
          <a href="/" className="cursor-pointer hover:text-sky-500 flex items-center">
            <span>
              <FaPhoneAlt />
            </span>
            <span className="ml-2">+995 522 25 23 94</span>
          </a>
        </div>
        {/* second col  */}
        <span className="lg:col-span-4 hidden lg:block">
          <ul className="w-full grid grid-cols-4 gap-x-4 justify-items-center">
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
        {/* third col  */}
        <div className="lg:col-span-4 md:col-span-6 col-span-12 self-center">
          <div className="flex justify-end">
            <div className="w-1/4 flex justify-between">
              <button>
                <FaUser className="text-xl hover:text-sky-500" />
              </button>
              <button>
                <FaHeart className="text-xl hover:text-sky-500" />
              </button>
              <button
                className="relative"
                onClick={() => dispatch(toggleCart(true))}
              >
                <FaShoppingBag className="text-xl hover:text-sky-500" />
                <span className="absolute px-1 text-xs text-white font-robotoBold bg-sky-500 rounded-full top-2 -translate-y-2/4 -right-2">
                  {totalQuantity > 0 ? totalQuantity : ""}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
