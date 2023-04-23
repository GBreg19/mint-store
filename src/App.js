import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Body/Header";
import Cart from "./components/Cart/Cart";
import Modal from "./components/modal/Modal";
import ProductAdd from "./components/Pages/ProductAdd";
import Footer from "./components/Body/Footer";
import Home from "./components/Pages/Home";

function App() {
  const isClicked = useSelector((state) => state.cart.isClicked);

  const [breadCrumbs, setBreadCrumbs] = useState([
    { label: "Home", link: "/" },
    { label: "Add Product" },
  ]);

  return (
    <Fragment>
      <Header />
      {isClicked && <Modal />}
      <Cart />
      <Routes>
        <Route exact path="/mint-store" element={<Home />}></Route>
        <Route exact path="/product-add" element={<ProductAdd data={breadCrumbs} />}></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
