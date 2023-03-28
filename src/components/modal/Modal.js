import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";

const Modal = () => {
  const { setIsClicked } = useContext(CartContext);
  return (
    <div
      className="fixed inset-0 bg-black opacity-50 z-30"
      onClick={() => setIsClicked(false)}
    ></div>
  );
};

export default Modal;
