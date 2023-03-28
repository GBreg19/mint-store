import React, { useContext } from "react";
import { FaTrash, FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { CartContext } from "../../store/CartContext";

const CartItem = ({ data }) => {
  const { removeFromCart, incrementCartItem, decrementCartItem } =
    useContext(CartContext);

    console.log(data)


  return (
    <li className="border-2 border-hamBlue rounded-lg px-4 py-1 mb-2">
      <span className="flex justify-between items-center gap-2">
        <span className="flex basis-1/12 justify-between">
          <span>
            <FaPlusSquare
              className="cursor-pointer text-green-500"
              onClick={() => incrementCartItem(data.id)}
            />
          </span>
          <span>
            <FaMinusSquare
              className="cursor-pointer text-red-500"
              onClick={() => decrementCartItem(data.id)}
            />
          </span>
        </span>
        <span className="flex basis-11/12 justify-between">
          <h3 className="font-robotoLight">
            {data.amount <= 1 ? data.name : `x${data.amount} ${data.name}`}
          </h3>
          <p className="font-robotoBold">{data.price}$</p>
        </span>
        <span className="cursor-pointer" onClick={() => removeFromCart(data)}>
          <FaTrash className="text-gray-700 text-sm" />
        </span>
      </span>
    </li>
  );
};

export default CartItem;
