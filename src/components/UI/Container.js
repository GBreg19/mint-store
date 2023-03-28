import React from "react";

const Container = (props) => {
  return (
    <div
      className={` ${
        props.className
          ? props.className
          : "p-10 shadow-black absolute top-2/3 left-2/4 -translate-x-2/4 w-11/12 rounded-lg bg-white shadow-lg dark:bg-neutral-700"
      } `}
    >
      {props.children}
    </div>
  );
};

export default Container;
