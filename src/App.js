import { Fragment, useContext } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Body/Header";
import Cart from "./components/Cart/Cart";
import Modal from "./components/modal/Modal";
import ProductAdd from "./components/Products/ProductAdd";
import ProductList from "./components/Products/ProductList";
import { CartContext } from "./store/CartContext";

function App() {
  const isClicked = useSelector((state) => state.cart.isClicked);
  return (
    <Fragment>
      <Header />
      {isClicked && <Modal />}
      {isClicked && <Cart />}
      <Routes>
        <Route exact path="/" element={<ProductList />}></Route>
        <Route exact path="/product-add" element={<ProductAdd />}></Route>
      </Routes>
    </Fragment>
  );
}

export default App;
