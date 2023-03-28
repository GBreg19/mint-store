import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { CartContext } from "../../store/CartContext";
import Button from "../UI/Button";

const HeaderCartBtn = () => {
  const { setIsClicked, cartItems, totalItems } = useContext(CartContext);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Button cart onClick={handleClick}>
      <FaShoppingCart />
      <div className="w-7/12 flex justify-between font-robotoLight relative">
        <span>Cart</span>
        <span className="absolute w-5 text-sm text-hamBlue font-robotoBold bg-white rounded-full top-2/4 -translate-y-2/4 -right-3">
          {totalItems}
        </span>
      </div>
    </Button>
  );
};

export default HeaderCartBtn;
