import React from "react";

const Button = (props) => {
  return (
    <button
      className={`bg-hamBlue text-white font-robotoBold text-lg rounded-md hover:bg-sky-500 ease-in duration-300 py-1 px-3 ${
        props.className ? props.className : ""
      } `}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
