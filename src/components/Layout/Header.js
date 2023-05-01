import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHeart, FaUser, FaShoppingBag, FaPhoneAlt } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { toggleOnClick } from "../../slices/cartSlice";
import Container from "../UI/Container";
import Nav from "./Nav";

const Header = ({ onSideBurger }) => {
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

  const toggleClick = (resp) => {
    onSideBurger(resp);
  };

  return (
    <Container>
      <div className="md:block hidden border-b-[1px] border-black/10 pb-10">
        <h1
          onClick={() => navigate("/")}
          className="font-dancBold text-5xl cursor-pointer text-center tracking-wider"
        >
          Mint
        </h1>
      </div>
      <div
        className={`grid lg:grid-cols-3 grid-cols-2 justify-between md:pt-10 items-center ${
          isFixed
            ? "fixed top-0 left-[50%] translate-x-[-50%] py-10 2xl:w-[1400px] lg:w-[1150px] w-full lg:px-30 md:px-20 px-5 z-30 bg-white border-b-[1px] border-black/10"
            : ""
        }`}
      >
        {/* first col  */}

        <div className="lg:col-span-1 basis-1/2">
          <a
            href="/"
            className="md:flex hidden cursor-pointer hover:text-sky-500 items-center"
          >
            <span>
              <FaPhoneAlt />
            </span>
            <span className="ml-2">+995 522 25 23 94</span>
          </a>

          <h1
            onClick={() => navigate("/")}
            className="md:hidden block font-dancBold text-5xl cursor-pointer text-center tracking-wider  items-center"
          >
            Mint
          </h1>
        </div>
        {/* second col  */}
        <Nav />
        {/* third col  */}
        <div className="lg:w-1/3 md:w-1/2 w-7/12 lg:col-span-1 md:justify-self-end justify-self-center">
          <div className="flex justify-between">
            <button onClick={() => navigate('/login')}>
              <FaUser className="text-xl hover:text-sky-500" />
            </button>
            <button>
              <FaHeart className="text-xl hover:text-sky-500" />
            </button>
            <button
              className="relative"
              onClick={() => dispatch(toggleOnClick(true))}
            >
              <FaShoppingBag className="text-xl hover:text-sky-500" />
              <span className="absolute px-1 text-xs text-white font-robotoBold bg-sky-500 rounded-full top-2 -translate-y-2/4 -right-2">
                {totalQuantity > 0 ? totalQuantity : ""}
              </span>
            </button>
            <button
              className="lg:hidden text-xl hover:text-sky-500 self-center"
              onClick={() => toggleClick(true)}
            >
              <AiOutlineMenu />
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Header;
