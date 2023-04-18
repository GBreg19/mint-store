import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-hamBlue text-white rounded-md font-robotoBold text-lg hover:bg-hamLightBlue ease-in duration-300 py-1 px-3 ${
        props.cart
          ? "py-1 px-6 flex items-center justify-between w-32"
          : props.isClicked
          ? `${`bg-blue-500 text-white font-bold py-2 px-4 rounded ${
              props.isClicked ? "transform scale-105" : ""
            } transition-all duration-300`}}`
          : props.cartClose
          ? "absolute top-4 right-5 bg-transparent"
          : props.submitBtn ? 'w-full mt-2' : ''
      } `}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
