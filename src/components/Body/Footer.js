import React from "react";
import Container from "../UI/Container";
import Input from "../UI/Input";
import { FaArrowRight } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
      <div className="flex justify-between bg-white border-solid border-t-2 border-white-600 pt-10">
        <div className="">
          <h2 className="font-robotoBold text-lg">Help & Information</h2>
          <ul className="mt-2">
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Help & Contact Us
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Return & Refunds
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Online Store
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Terms & Conditions
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-robotoBold text-lg">About Us</h2>
          <ul className="mt-2">
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              About Us
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              What We Do
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              FAQ Page
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Contact Us
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="font-robotoBold text-lg">Social Media</h2>
          <ul className="mt-2">
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Facebook
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Instagram
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Twitter
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Youtube
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div className="relative">
            <h2 className="font-robotoBold text-lg mb-2">Newsletter</h2>
            <span className="absolute right-2 bottom-3.5">
              <FaArrowRight className="cursor-pointer text-xl" />
            </span>
            <Input
              placeholder="Your email address"
              className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 px-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            />
          </div>
          <ul className="flex flex-row justify-between">
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Term & Condition
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Policy
            </li>
            <li className="font-robotoReg cursor-pointer leading-8 hover:text-sky-500">
              Map
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
