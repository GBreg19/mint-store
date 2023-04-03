import React from "react";
import CartItem from "./CartItem";
import Button from "../UI/Button";
import emptyCart from "../../Images/empty-cart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../../slices/cartSlice";

const Cart = () => {
  const {cartItems, totalAmount} = useSelector((state) => ({cartItems: state.cart.cartItems, totalAmount: state.cart.totalAmount}));
  console.log(totalAmount)
  const dispatch = useDispatch();
  return (
    <div className="w-[40rem] pb-5 fixed top-1/4 left-1/2 -translate-x-2/4 bg-white rounded-lg z-50">
      <div className="bg-hamLightBlue rounded-t-lg relative py-4">
        <Button
          onClick={() => dispatch(dispatch(toggleCart(false)))}
          cartClose={true}
        >
          X
        </Button>
        <h1 className="flex justify-center pt-1 text-white text-xl font-robotoLight">
          Your Cart
        </h1>
      </div>
      <div className="mt-8 px-5">
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((item) => {
              return <CartItem key={item.id} data={item} />;
            })}
          </ul>
        ) : (
          <div className=" h-1/3 flex flex-col justify-between items-center">
            <span className="text-xl font-robotoBold pb-5">
              <h2>Your cart is empty!</h2>
            </span>
            <span>
              <img src={emptyCart} width="300" alt="Empty Cart" />
            </span>
            <span className="text-center pt-10 font-robotoLight text-lg">
              <p>Looks like you have not added anything to your cart</p>
            </span>
          </div>
        )}
        <span className="flex justify-between items-center mt-8">
          <h3 className="ml-1 font-robotoBold">Total: {totalAmount}$ </h3>
          <Button>Check Out</Button>
        </span>
      </div>
    </div>
  );
};

export default Cart;
