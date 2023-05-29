import React, { Fragment } from "react";
import Card from "../Layout/Card";
import Container from "../UI/Container";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";
import Input from "../UI/Input";
import Button from "../UI/Button";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Contact
        </h1>
      </Card>
      <Container>
        <div>
          <div className="grid grid-cols-4 gap-10 pb-14 border-b-2 border-gray-200">
            <div className="flex w-5/6">
              <div className="mr-5">
                <FaRegClock className="text-3xl" />
              </div>
              <div className="flex flex-col items-center font-robotoReg mb-5">
                <div className="w-full mb-3">
                  <h3 className="text-xl font-medium">Open houses</h3>
                </div>
                <span>
                  <p>Mon – Fri : 8:30 – 18:00</p>
                  <p>Sat – Sun : 9:00 – 17:00</p>
                </span>
              </div>
            </div>
            <div className="flex w-5/6">
              <div className="mr-5">
                <HiOutlinePhone className="text-3xl" />
              </div>
              <div className="flex flex-col items-center font-robotoReg mb-5">
                <div className="w-full mb-3">
                  <h3 className="text-xl font-medium">Phone number</h3>
                </div>
                <span>
                  <p>(504) 586 256 23</p>
                  <p>(306) 574 326 56</p>
                </span>
              </div>
            </div>
            <div className="flex w-5/6">
              <div className="mr-5">
                <AiOutlineMail className="text-3xl" />
              </div>
              <div className="flex flex-col items-center font-robotoReg mb-5">
                <div className="w-full mb-3">
                  <h3 className="text-xl font-medium">Our email</h3>
                </div>
                <span>
                  <p>office@mint.com</p>
                  <p>Info@mint.com</p>
                </span>
              </div>
            </div>
            <div className="flex w-5/6">
              <div className="mr-5">
                <CiLocationOn className="text-3xl" />
              </div>
              <div className="flex flex-col items-center font-robotoReg mb-5">
                <div className="w-full mb-3">
                  <h3 className="text-xl font-medium">Our location</h3>
                </div>
                <span>
                  <p>18 Some St, Tbilisi, Georgia</p>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between gap-20 mt-10">
            <div className="w-full">
              <form>
                <h1 className="text-2xl font-medium font-robotoReg mb-2">
                  Get in touch
                </h1>
                <p className="font-robotoReg mb-5">Write us a letter !</p>
                <div className="flex gap-5">
                  <Input placeholder="Name *" className="py-3" />
                  <Input type="email" placeholder="Email *" className="py-3" />
                </div>
                <Input placeholder="Subject *" className="py-3" />
                <textarea
                  placeholder="Text goes here..."
                  className="w-full h-40 form-control block px-1 py-1.5 text-base font-normal text-gray-70 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out mb-3 focus:text-gray-700 focus:bg-white focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
                />
                <Button className="rounded-none">Submit</Button>
              </form>
            </div>
            <div className="w-1/2">
              <div className="mb-5">
                <h1 className="text-2xl font-medium font-robotoReg mb-2">
                  Our Address
                </h1>
                <p>
                  Duis aute irure dolor in reprehenderit ioluptate velit esse
                  cillum dolore pariatur.
                </p>
              </div>
              <div className="mb-20">
                <p>18 Some St, Tbilisi, Georgia</p>
                <p>office@mint.com</p>
              </div>
              <div className="flex items-center">
                <p>Follow Us On Social</p>
                <span className="flex ml-16 w-20 justify-between">
                  <FaFacebookF className="hover:text-sky-700 cursor-pointer" />
                  <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                  <FaInstagram className="hover:text-red-500 cursor-pointer" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Contact;
