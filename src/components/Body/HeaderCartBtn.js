import React, { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../slices/cartSlice";
import Button from "../UI/Button";

const HeaderCartBtn = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const dispatch = useDispatch();

  return (
    <Button cart onClick={() => dispatch(toggleCart(true))}>
      <FaShoppingCart />
      <div className="w-7/12 flex justify-between font-robotoLight relative">
        <span>Cart</span>
        <span className="absolute w-5 text-sm text-hamBlue font-robotoBold bg-white rounded-full top-2/4 -translate-y-2/4 -right-3">
          {totalQuantity > 0 ? totalQuantity : ''}
        </span>
      </div>
    </Button>
  );
};

export default HeaderCartBtn;
