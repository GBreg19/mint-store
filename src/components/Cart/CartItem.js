import React, { useContext } from "react";
import { FaTrash, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { calculateTotal, decrement, increment, removeFromCart } from "../../slices/cartSlice";
import { CartContext } from "../../store/CartContext";

const CartItem = ({ data }) => {
  const dispatch = useDispatch();

  return (
    <li className="border-2 border-hamBlue rounded-lg px-4 py-1 mb-2">
      <span className="flex justify-between items-center gap-2">
        <span className="flex basis-1/12 justify-between">
          <span>
            <FaPlusSquare
              className="cursor-pointer text-green-500"
              onClick={() => {
                dispatch(increment(data.id));
                dispatch(calculateTotal());
              }}
            />
          </span>
          <span>
            <FaMinusSquare
              className="cursor-pointer text-red-500"
              onClick={() => {
                dispatch(decrement(data.id));
                dispatch(calculateTotal());
              }}
            />
          </span>
        </span>
        <span className="flex basis-11/12 justify-between">
          <h3 className="font-robotoLight">
            {data.quantity <= 1 ? data.name : `x${data.quantity} ${data.name}`}
          </h3>
          <p className="font-robotoBold">{data.price}$</p>
        </span>
        <span
          className="cursor-pointer"
          onClick={() => dispatch(removeFromCart(data))}
        >
          <FaTrash className="text-gray-700 text-sm" />
        </span>
      </span>
    </li>
  );
};

export default CartItem;
