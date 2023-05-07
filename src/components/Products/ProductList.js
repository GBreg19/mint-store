import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Product from "./Product";
import useFetch from "../../hooks/useFetch";

const ProductList = () => {
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
    setVisibleItems,
  } = useFetch();

  const onLoadMore = () => {
    setVisibleItems((prevState) => (prevState += 3));
  };

  if (error) {
    return (
      <div className="m-auto text-center w-94 text-red-500 font-robotoBold">
        {error}
      </div>
    );
  }

  return (
    <Fragment>
      <div className="flex justify-between items-center pb-5">
        <div>
          <h1 className="text-4xl font-robotoReg">Popular Products</h1>
        </div>
        <div className="flex items-center justify-between w-80">
          <ul className="flex justify-between gap-2">
            <li
              onClick={() => {
                onAllProducts();
                setIsActive("all");
              }}
              className={`border-r-2 pr-3 cursor-pointer leading-3 border-black ${
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
              className={`border-r-2 pr-3 cursor-pointer leading-3 border-black ${
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
              className={`border-r-2 pr-3 cursor-pointer leading-3 border-black ${
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
              className={`pr-3 cursor-pointer leading-3 ${
                isActive === "furn" ? "text-gray-500" : ""
              }`}
            >
              Furniture
            </li>
          </ul>
          <Button
            onClick={() => {
              navigate("product-add");
            }}
          >
            Add
          </Button>
        </div>
      </div>
      <div>
        <ul className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid-flow-rows gap-5 pt-10 place-items-center">
          {products.slice(0, visibleItems).map((item) => {
            return (
              <Product
                key={item.id}
                item={item}
                data={products}
                setData={setProducts}
              />
            );
          })}
        </ul>
        {visibleItems < products.length && (
          <Button
            className="block m-auto mt-10 px-11 rounded-none"
            onClick={onLoadMore}
          >
            Load More
          </Button>
        )}
      </div>
    </Fragment>
  );
};

export default ProductList;
