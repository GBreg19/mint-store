import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Product from "./Product";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const [isActive, setIsActive] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const response = await axios.get(`http://localhost:3004/products`);
        setProducts(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError("Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004");
        setIsLoading(false);
      }
    })();
  }, []);

  const onAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
      setError("Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004");
    }
  };

  const onDvd = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const filteredArr = response.data.filter((x) => x.typeSwitcher === "dvd");
      setProducts(filteredArr);
    } catch (err) {
      console.log(err);
      setError("Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004");
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
      setError("Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004");
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
      setError("Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004");
    }
  };

  const onLoadMore = () => {
    setVisibleItems((prevState) => (prevState += 3));
  };

  if (error) {
    return <div className="m-auto text-center w-94 text-red-500 font-robotoBold">{error}</div>;
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
