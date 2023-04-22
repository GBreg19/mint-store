import React from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import {
  calculateTotal,
  decrement,
  increment,
  removeFromCart,
} from "../../slices/cartSlice";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className="border-b-[1px] border-black/20 py-3">
      <span className="flex justify-between gap-2">
        <span className="flex basis-1/12 justify-between pt-1">
          <span>
            <FaPlusSquare
              className="cursor-pointer hover:text-green-500"
              onClick={() => {
                dispatch(increment(data.id));
                dispatch(calculateTotal());
              }}
            />
          </span>
          <span>
            <FaMinusSquare
              className="cursor-pointer hover:text-red-500"
              onClick={() => {
                dispatch(decrement(data.id));
                dispatch(calculateTotal());
              }}
            />
          </span>
        </span>
        <span className="flex basis-11/12 justify-between">
          <span>
            <h3 className="font-robotoLight">
              {data.quantity <= 1 ? data.name : `${data.name}`}
            </h3>
            <p className="text-xs">Quantity: {data.quantity}</p>
          </span>
          <p className="font-robotoBold">{data.price}$</p>
        </span>
        <span
          className="cursor-pointer"
          onClick={() => {
            dispatch(removeFromCart(data));
            dispatch(calculateTotal());
          }}
        >
          <AiOutlineClose className="text-gray-700 text-sm " />
        </span>
      </span>
    </li>
  );
};

export default CartItem;
