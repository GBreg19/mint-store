import React from "react";
import { useDispatch } from "react-redux";
import { toggleOnClick } from "../../slices/cartSlice";

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  return (
    <div
      className="fixed inset-0 bg-black opacity-50 z-30"
      onClick={() => {
        dispatch(toggleOnClick(false));
        onClose(false);
      }}
    ></div>
  );
};

export default Modal;
