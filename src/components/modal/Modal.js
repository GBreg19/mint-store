import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { toggleCart } from "../../slices/cartSlice";
import { CartContext } from "../../store/CartContext";

const Modal = () => {
  const { setIsClicked } = useContext(CartContext);
  const dispatch = useDispatch()
  return (
    <div
      className="fixed inset-0 bg-black opacity-50 z-30"
      onClick={() => dispatch(toggleCart(false))}
    ></div>
  );
};

export default Modal;
