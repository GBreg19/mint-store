import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Container from "../UI/Container";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [isActive, setIsActive] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3004/products`);
        setProducts(response.data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const onAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onDvd = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const filteredArr = response.data.filter((x) => x.typeSwitcher === "dvd");
      setProducts(filteredArr);
    } catch (err) {
      console.log(err);
    }
  };

  const onBooks = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const filteredArr = response.data.filter(
        (x) => x.typeSwitcher === "book"
      );
      setProducts(filteredArr);
    } catch (err) {
      console.log(err);
    }
  };

  const onFurniture = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const filteredArr = response.data.filter(
        (x) => x.typeSwitcher === "furniture"
      );
      setProducts(filteredArr);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center py-2">
        <div>
          <h1 className="text-4xl font-robotoReg">Popular Products</h1>
        </div>
        <div className="flex items-center basis-1/3 justify-between">
          <ul className="flex basis-5/6 justify-between">
            <li
              onClick={() => {
                onAllProducts();
                setIsActive("all");
              }}
              className={`border-r-2 pr-3 cursor-pointer leading-3 border-black ${
                isActive === "all" ? "text-gray-500" : ""
              }`}
            >
              All Products
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
            className="basis-1/12"
          >
            Add
          </Button>
        </div>
      </div>
      <div className="border-t-2 border-white-900">
        <ul className="flex flex-wrap gap-10 pt-10">
          {products.map((item) => {
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
      </div>
    </Container>
  );
};

export default ProductList;
