import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Container from "../UI/Container";
import Card from "../Layout/Card";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Product from "../Products/Product";
import { FaDollarSign, FaChevronDown } from "react-icons/fa";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const [currPage, setCurrPage] = useState(1);
  const [isActive, setIsActive] = useState("all");
  const navigate = useNavigate();
  
  const {
    onAllProducts,
    onDvd,
    onBooks,
    onFurniture,
    products,
    setProducts,
    error,
    visibleItems,
    onDefault,
    onPriceLow,
    onPriceHigh,
  } = useFetch();

  // const onLoadPage = (index) => {
  //   setProducts(dividedProducts[index]);
  // };

  if (error) {
    return (
      <div className="m-auto text-center w-94 text-red-500 font-robotoBold">
        {error}
      </div>
    );
  }

  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Login
        </h1>
        <p>Breadcrumbs</p>
      </Card>
      <Container>
        <div className="flex">
          <div className="basis-2/12">
            <div className="border-b-[1px] border-black/10 pb-8 mb-8">
              <h3 className="font-robotoBold mb-5">Categories</h3>
              <ul className="flex flex-col gap-1  ">
                <li
                  onClick={() => {
                    onAllProducts();
                    setIsActive("all");
                  }}
                  className={`cursor-pointer ${
                    isActive === "all" ? "text-gray-500" : ""
                  }`}
                >
                  All
                </li>
                <li
                  onClick={() => {
                    onDvd();
                    setIsActive("dvd");
                  }}
                  className={`cursor-pointer ${
                    isActive === "dvd" ? "text-gray-500" : ""
                  }`}
                >
                  DVD
                </li>
                <li
                  onClick={() => {
                    onBooks();
                    setIsActive("books");
                  }}
                  className={`cursor-pointer ${
                    isActive === "books" ? "text-gray-500" : ""
                  }`}
                >
                  Books
                </li>
                <li
                  onClick={() => {
                    onFurniture();
                    setIsActive("furn");
                  }}
                  className={`cursor-pointer ${
                    isActive === "furn" ? "text-gray-500" : ""
                  }`}
                >
                  Furniture
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-robotoBold mb-5">Price</h3>
              <div className="relative">
                <label>From</label>
                <Input
                  type="number"
                  className="pl-5 rounded-none"
                  placeholder="0"
                />
                <span className="absolute top-[35px] left-1">
                  <FaDollarSign className="text-black/30" />
                </span>
              </div>
              <div className="relative">
                <label>To</label>
                <Input
                  type="number"
                  className="pl-5 rounded-none"
                  placeholder="90"
                />
                <span className="absolute top-[35px] left-1">
                  <FaDollarSign className="text-black/30" />
                </span>
              </div>
              <Button className="mt-1 rounded-none">Filter</Button>
            </div>
          </div>
          <div className="basis-10/12">
            <div className=" w-80 items-center px-4 flex justify-between relative">
              <span>
                <p>{`Showing 1-${visibleItems} of ${products.length}`}</p>
              </span>
              <div className="w-[2px] h-4 bg-black"></div>
              <span className="relative flex items-center group cursor-pointer">
                <a className="pr-2">Sort by: Default</a>
                <FaChevronDown />
                <div className="absolute z-10 top-full left-0 w-56 h-32 bg-white border border-1 border-black/10 shadow-md py-3 px-3 hidden group-hover:block">
                  <ul className="h-full flex flex-col justify-between">
                    <li className="text-slate-600 hover:text-black cursor-pointer font-robotoReg text-sm">
                      <button onClick={onDefault}>Default sorting</button>
                    </li>
                    <li className="text-slate-600 hover:text-black cursor-pointer font-robotoReg text-sm">
                      <button>Sort by latest</button>
                    </li>
                    <li className="text-slate-600 hover:text-black cursor-pointer font-robotoReg text-sm">
                      <button onClick={onPriceLow}>
                        Sort by price: low to high
                      </button>
                    </li>
                    <li className="text-slate-600 hover:text-black cursor-pointer font-robotoReg text-sm">
                      <button onClick={onPriceHigh}>Sort by price: high to low</button>
                    </li>
                  </ul>
                </div>
              </span>
            </div>
            <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-rows gap-5 pt-10 place-items-center">
              {products.map((item) => {
                return (
                  <Product
                    key={item.id}
                    item={item}
                    data={products}
                    setData={setProducts}
                    className="2xl:w-[300px] lg:w-64 w-60"
                  />
                );
              })}
            </ul>
            {/* <div className="flex justify-between w-2/12 m-auto mt-10">
              {dividedProducts.map((page, index) => {
                return (
                  <Button key={index} onClick={() => onLoadPage(index)}>
                    {index + 1}
                  </Button>
                );
              })}
              <Button className="rounded-none">Next</Button>
            </div> */}
          </div>
        </div>
      </Container>
    </Fragment>
  );
};

export default Products;
