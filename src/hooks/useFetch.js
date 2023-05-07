import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    async function fetchProducts() {
      setIsLoading(true);
      try {
        const response = await axios.get(`http://localhost:3004/products`);
        setProducts(response.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(
          "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
        );
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, []);

  const onAllProducts = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }
  };

  const onDvd = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const filteredArr = response.data.filter((x) => x.typeSwitcher === "dvd");
      setProducts(filteredArr);
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
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
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
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
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }
  };


  const onDefault = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      setProducts(response.data);
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }
  };

  const onPriceLow = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const onPriceLow = response.data.sort((x, y) => x.price - y.price);
      setProducts(onPriceLow);
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }
  };

  const onPriceHigh = async () => {
    try {
      const response = await axios.get(`http://localhost:3004/products`);
      const onPriceLow = response.data.sort((x, y) => y.price - x.price);
      setProducts(onPriceLow);
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }}

  return {
    onAllProducts,
    onDvd,
    onBooks,
    onFurniture,
    products,
    error,
    isLoading,
    visibleItems,
    setVisibleItems,
    setProducts,
    onDefault,
    onPriceLow,
    onPriceHigh
  };
};

export default useFetch;
