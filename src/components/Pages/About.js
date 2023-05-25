import React, { Fragment } from "react";
import BreadCrumbs from "../Breadcrumbs/Breadcrumbs";
import Card from "../Layout/Card";
import Container from "../UI/Container";
import { FaShoppingBag, FaPaypal, FaLocationArrow } from "react-icons/fa";
import { BsStopwatch } from "react-icons/bs";

const About = ({ data }) => {
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          About Us
        </h1>
        <BreadCrumbs items={data} />
      </Card>
      <Container>
        <div className="grid grid-cols-4">
          <div>
            <span className="flex items-center">
              <FaShoppingBag />
              <h3>Shop online</h3>
            </span>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dapibus vulputate lectus vel vehicula. Donec.
            </p>
          </div>
          <div>
            <span className="flex items-center">
              <FaPaypal />
              <h3>Payment methods</h3>
            </span>
            <p>
              Sed viverra, mauris ut efficitur suscipit, ex orci consectetur
              magna.
            </p>
          </div>
          <div>
            <span className="flex items-center">
              <FaLocationArrow />
              <h3>Free shipping</h3>
            </span>
            <p>
              Maecenas elementum tellus vel nibh consectetur, vitae eleifend
              nunc posuere. Vestibulum tempus eget.
            </p>
          </div>
          <div>
            <span className="flex items-center">
              <BsStopwatch />
              <h3>Return policy</h3>
            </span>
            <p>
              In cursus sodales velit id feugiat. Vestibulum pretium semper.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-10">
          <div>
            <h2>Functionality meets perfection</h2>
            <p>
              Praesent efficitur, risus id accumsan elementum, sapien nibh
              eleifend tellus, eget varius neque risus et sem. Vestibulum ante
              ipsum primis in faucibus orci luctus et ultrices posuere cubilia
              curae; Mauris ultrices risus ac enim efficitur, quis lobortis urna
              congue. Sed nec mi magna. Cras venenatis felis nec mauris commodo
              aliquam.
            </p>
          </div>
          <div>
            <div>
              <span className="flex justify-between"> 
                <h3>Creativity</h3>
                <h3>82%</h3>
              </span>
              <div className="bg-gray-200 h-1 w-full rounded-full relative">
                <div className="absolute bg-black w-[82%] top-0"></div>
              </div>
              </div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default About;
