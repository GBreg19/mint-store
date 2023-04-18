import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Body/Header";
import Cart from "./components/Cart/Cart";
import Modal from "./components/modal/Modal";
import ProductAdd from "./components/Products/ProductAdd";
import ProductList from "./components/Products/ProductList";
import Footer from "./components/Body/Footer";

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
      <Footer />
    </Fragment>
  );
}

export default App;
