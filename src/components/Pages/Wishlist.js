import React, { Fragment } from "react";
import Container from "../UI/Container";
import Card from "../Layout/Card";
import Button from "../UI/Button";

const Wishlist = () => {
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Wishlist
        </h1>
      </Card>
      <Container>
        <div className="grid grid-cols-4 bg-gray-200 py-2 px-3">
          <h1>Product Title</h1>
          <h1>Unit Price</h1>
        </div>
        <div>
          <ul>
            <li className="grid grid-cols-4 border-b border-gray-300 py-5 px-3 items-center">
              <h1>RAGACAAAAA</h1>
              <h1>30.87</h1>
              <Button className="w-40">Buy Now</Button>
              <span className="justify-self-end">X</span>
            </li>
            <li className="grid grid-cols-4 border-b border-gray-300 py-5 px-3 items-center">
              <h1>RAGACAAAAA</h1>
              <h1>30.87</h1>
              <Button className="w-40">Buy Now</Button>
              <span className="justify-self-end">X</span>
            </li>
          </ul>
        </div>
        <div className="text-right mt-5">
            <Button className='bg-white text-black font-robotoLight border border-black rounded-none  hover:border-sky-500'>Clear Wishlist</Button>
        </div>
      </Container>
    </Fragment>
  );
};

export default Wishlist;
