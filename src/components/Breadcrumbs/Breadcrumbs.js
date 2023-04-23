import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ items }) => {
  return (
    <nav>
      <ul className="flex">
        {items.map((item, index) => {
          return (
            <Fragment key={index}>
              <li>
                {item.link ? (
                  <Link to={item.link} className="font-robotoBold pr-2">
                    {item.label}
                  </Link>
                ) : (
                  <h1 className="text-black/50 font-robotoReg pl-2">
                    {item.label}
                  </h1>
                )}
              </li>
              <span className="text-xs flex items-center">
                {items.length - 1 !== index && " / "}
              </span>
            </Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default BreadCrumbs;
