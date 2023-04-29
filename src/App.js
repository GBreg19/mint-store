import { Fragment, useState } from "react";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import Modal from "./components/modal/Modal";
import ProductAdd from "./components/Pages/ProductAdd";
import Footer from "./components/Layout/Footer";
import Home from "./components/Pages/Home";
import SidebarMenu from "./components/Layout/SidebarMenu";

function App() {
  const [isBurgerClicked, setIsBurgerClicked] = useState(false)
  const isClicked = useSelector((state) => state.cart.isClicked);

  const [breadCrumbs, setBreadCrumbs] = useState([
    { label: "Home", link: "/" },
    { label: "Add Product" },
  ]);

  const onSideBarMenuClick = (resp) => {
    setIsBurgerClicked(resp)
  }

  return (
    <Fragment>
      <Header onSideBurger={(resp) => onSideBarMenuClick(resp)} />
      <SidebarMenu clickEvents={{isBurgerClicked, setIsBurgerClicked}} /> 
      {(isClicked || isBurgerClicked) && <Modal onClose={setIsBurgerClicked} />}
      <Cart />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route
          exact
          path="/product-add"
          element={<ProductAdd data={breadCrumbs} />}
        ></Route>
      </Routes>
      <Footer />
    </Fragment>
  );
}

export default App;
