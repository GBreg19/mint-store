import React from "react";

const Container = (props) => {
  return (
    <div
      className={`py-10 shadow-black m-auto 2xl:w-[1400px] lg:w-[1150px] lg:px-30 md:px-20 px-5 bg-white shadow-xs ${
        props.className ? props.className : ""
      } `}
    >
      {props.children}
    </div>
  );
};

export default Container;
