import React, { Fragment } from "react";
import Card from "../Layout/Card";
import Container from "../UI/Container";
import { FaRegClock } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlinePhone } from "react-icons/hi";

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
        </div>
      </Container>
    </Fragment>
  );
};

export default Contact;
