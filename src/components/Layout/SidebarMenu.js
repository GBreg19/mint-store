import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Nav from "./Nav";

const SidebarMenu = ({ clickEvents }) => {
  return (
    <div
      className={`fixed right-0 inset-y-0 w-[410px] bg-white shadow-lg z-50 transform transition pt-9 px-10 duration-500 ease-in-out ${
        clickEvents.isBurgerClicked ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <button
        onClick={() => clickEvents.setIsBurgerClicked(false)}
        className="absolute font-bold text-3xl"
      >
        <AiOutlineClose />
      </button>
      <Nav className="pt-20 flex flex-col h-48 justify-between" />
      <div className="pt-14">
        <h3 className="font-robotoBold pb-5">Contact Us</h3>
        <span className="font-robotoLight block mb-1">18 Some St, Tbilisi, Georgia</span>
        <span className="font-robotoLight block mb-1">support.center@mint.co</span>
        <span className="font-robotoLight block mb-1">+995 522 25 23 94</span>
      </div>
      <div className="flex items-center justify-between pt-14">
        <h3 className="basis-2/3 capitalize font-robotoBold">follow us on socials</h3>
        <div className="flex basis-1/3 justify-between">
          <span className="text-2xl hover:text-sky-700 cursor-pointer">
            <FaFacebookF />
          </span>
          <span className="text-2xl hover:text-sky-500 cursor-pointer">
            <FaTwitter />
          </span>
          <span className="text-2xl hover:text-red-500 cursor-pointer">
            <FaInstagram />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
