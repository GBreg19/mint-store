import React, { Fragment } from "react";
import Card from "../Layout/Card";
import Container from "../UI/Container";
import { FaShoppingBag, FaPaypal, FaLocationArrow } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";
import bg1 from "../../Images/bg1.jpg";

const About = () => {
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          About Us
        </h1>
      </Card>
      <Container>
        <div className="relative overflow-hidden mb-20">
          <img
            src={bg1}
            alt="background-1"
            className="transition-transform duration-300 ease-in-out hover:scale-105 mb-10"
          />
          <p className="mb-5 font-robotoReg leading-[26px] indent-3">
            Welcome to our e-commerce website, where shopping meets convenience,
            quality, and a seamless online experience. We offer a wide range of
            products from trusted brands, ensuring only the highest quality
            items make it onto our virtual shelves. With intuitive search
            functionalities and detailed product descriptions, we strive to make
            your browsing experience effortless.
          </p>
          <p className="mb-5 font-robotoReg leading-[26px] indent-3">
            Our dedicated customer care team is here to provide exceptional
            support, ensuring your needs are met promptly. We believe in
            building strong relationships with our customers and are committed
            to delivering a personalized shopping experience. From prompt
            responses to inquiries to swift and reliable shipping, your
            satisfaction is our top priority.
          </p>
          <p className="font-robotoReg leading-[26px] indent-3">
            Discover the joy of online shopping with us. Explore our selection
            of products and enjoy the convenience and satisfaction of shopping
            from the comfort of your own home. We are constantly updating our
            inventory to bring you the latest trends and innovations, so you can
            stay ahead of the curve. Join us on this exciting e-commerce journey
            and experience the future of shopping today.
          </p>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          <div>
            <span className="flex items-center font-robotoReg justify-between mb-5 w-52">
              <FaShoppingBag className="text-3xl" />
              <h3 className="text-xl">Shop online</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus vulputate lectus vel vehicula. Donec.
            </p>
          </div>
          <div>
            <span className="flex items-center font-robotoReg justify-between mb-5 w-52">
              <FaPaypal className="text-3xl" />
              <h3 className="text-xl">Payment methods</h3>
            </span>
            <p>
              Sed viverra, mauris ut efficitur suscipit, ex orci consectetur
              magna.
            </p>
          </div>
          <div>
            <span className="flex items-center font-robotoReg justify-between mb-5 w-52">
              <FaLocationArrow className="text-3xl" />
              <h3 className="text-xl">Free shipping</h3>
            </span>
            <p>
              Maecenas elementum tellus vel nibh consectetur, vitae eleifend
              nunc posuere. Vestibulum tempus eget.
            </p>
          </div>
          <div>
            <span className="flex items-center font-robotoReg justify-between mb-5 w-52">
              <BsStopwatch className="text-3xl" />
              <h3 className="text-xl">Return policy</h3>
            </span>
            <p>
              In cursus sodales velit id feugiat. Vestibulum pretium semper.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-20 mt-10 w-full">
          <div className="flex flex-col justify-between lg:w-full w-11/12">
            <h1 className="font-robotoBold text-xl mb-5">
              Functionality meets perfection
            </h1>
            <p className="leading-[26px] font-robotoReg">
              Praesent efficitur, risus id accumsan elementum, sapien nibh
              eleifend tellus, eget varius neque risus et sem. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Mauris ultrices risus ac enim efficitur, quis lobortis urna
              congue. Sed nec mi magna. Cras venenatis felis nec mauris commodo
              aliquam.
            </p>
          </div>
          <div className="flex flex-col justify-between lg:h-full md:h-1/2 h-48 lg:w-full w-11/12 " >
            <div>
              <span className="flex justify-between mb-3 font-robotoBold">
                <h3>Creativity</h3>
                <h3>82%</h3>
              </span>
              <div className="bg-gray-200 h-1 w-full rounded-full relative">
                <div className="absolute rounded-full h-1 bg-black w-[82%]"></div>
              </div>
            </div>
            <div>
              <div>
                <span className="flex justify-between mb-3 font-robotoBold">
                  <h3>Advertising</h3>
                  <h3>80%</h3>
                </span>
                <div className="bg-gray-200 h-1 w-full rounded-full relative">
                  <div className="absolute rounded-full h-1 bg-black w-[80%]"></div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span className="flex justify-between mb-3 font-robotoBold">
                  <h3>Design</h3>
                  <h3>75%</h3>
                </span>
                <div className="bg-gray-200 h-1 w-full rounded-full relative">
                  <div className="absolute rounded-full h-1 bg-black w-[75%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default About;
