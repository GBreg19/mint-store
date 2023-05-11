import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [visibleItems, setVisibleItems] = useState(3);
  const [fromPrice, setFromPrice] = useState("");
  const [toPrice, setToPrice] = useState("");
  const [isActive, setIsActive] = useState("all");

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
      if (isActive === "all") {
        setProducts(response.data);
      } else if (isActive === "dvd") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "dvd"
        );
        setProducts(filteredArr);
      } else if (isActive === "books") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "book"
        );
        setProducts(filteredArr);
      } else {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "furniture"
        );
        setProducts(filteredArr);
      }
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
      if (isActive === "all") {
        const onPriceLow = response.data.sort((x, y) => x.price - y.price);
        setProducts(onPriceLow);
      } else if (isActive === "dvd") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "dvd"
        );
        const onPriceLow = filteredArr.sort((x, y) => x.price - y.price);
        setProducts(onPriceLow);
      } else if (isActive === "books") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "book"
        );

        const onPriceLow = filteredArr.sort((x, y) => x.price - y.price);
        setProducts(onPriceLow);
      } else {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "furniture"
        );
        const onPriceLow = filteredArr.sort((x, y) => x.price - y.price);
        setProducts(onPriceLow);
      }
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
      if (isActive === "all") {
        const onPriceHigh = response.data.sort((x, y) => y.price - x.price);
        setProducts(onPriceHigh);
      } else if (isActive === "dvd") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "dvd"
        );
        const onPriceHigh = filteredArr.sort((x, y) => y.price - x.price);
        setProducts(onPriceHigh);
      } else if (isActive === "books") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "book"
        );
        const onPriceHigh = filteredArr.sort((x, y) => y.price - x.price);
        setProducts(onPriceHigh);
      } else {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "furniture"
        );
        const onPriceHigh = filteredArr.sort((x, y) => y.price - x.price);
        setProducts(onPriceHigh);
      }
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }
  };

  const onFromHandler = (e) => {
    const value = e.target.value;
    setFromPrice(value);
  };
  const onToHandler = (e) => {
    const value = e.target.value;
    setToPrice(value);
  };

  const onPriceFilter = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:3004/products`);
      if (isActive === "all") {
        const filteredByPrice = response.data.filter(
          (product) => parseFloat(product.price) >= fromPrice && parseFloat(product.price) <= toPrice
        );
        setProducts(filteredByPrice);
      } else if (isActive === "dvd") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "dvd"
        );
        const filteredByPrice = filteredArr.filter(
          (product) => parseFloat(product.price) >= fromPrice && parseFloat(product.price) <= toPrice
        );
        setProducts(filteredByPrice);
      } else if (isActive === "book") {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "book"
        );
        const filteredByPrice = filteredArr.filter(
          (product) => parseFloat(product.price) >= fromPrice && parseFloat(product.price) <= toPrice
        );
        setProducts(filteredByPrice);
      } else {
        const filteredArr = response.data.filter(
          (x) => x.typeSwitcher === "furn"
        );
        const filteredByPrice = filteredArr.filter(
          (product) => parseFloat(product.price) >= fromPrice && parseFloat(product.price) <= toPrice
        );
        setProducts(filteredByPrice);
      }
    } catch (err) {
      console.log(err);
      setError(
        "Error fetching products. To fetch data run this command - json-server --watch db.json --port 3004"
      );
    }

    setFromPrice("");
    setToPrice("");
  };

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
    onPriceHigh,
    onPriceFilter,
    onFromHandler,
    onToHandler,
    setFromPrice,
    setToPrice,
    fromPrice,
    toPrice,
    isActive,
    setIsActive,
  };
};

export default useFetch;
