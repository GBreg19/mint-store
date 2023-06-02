import React, { Fragment } from "react";
import Button from "../UI/Button";
import { BiX } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../../slices/cartSlice";

const WishlistItem = ({ data }) => {
    const dispatch = useDispatch()
  return (
    <Fragment>
      <li className="grid grid-cols-4 border-b border-gray-300 py-5 px-3 items-center">
        <h1>{data.name}</h1>
        <h1>{data.price}</h1>
        <Button className="w-40">Buy Now</Button>
        <button className="justify-self-end" onClick={() => dispatch(removeFromWishlist(data.id))}>
          <BiX className="text-3xl" />
        </button>
      </li>
    </Fragment>
  );
};

export default WishlistItem;
