import React, { Fragment } from "react";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { toggleOnClick } from "../../slices/cartSlice";
import { AiOutlineClose } from "react-icons/ai";

const Cart = () => {
  const { cartItems, totalAmount, isClicked } = useSelector((state) => ({
    cartItems: state.cart.cartItems,
    totalAmount: state.cart.totalAmount,
    isClicked: state.cart.isClicked,
  }));
  const dispatch = useDispatch();

  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-[410px] bg-white shadow-lg transform transition pt-9 px-3 duration-500 ease-in-out ${
        isClicked ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="relative">
        <button
          onClick={() => dispatch(dispatch(toggleOnClick(false)))}
          className="absolute left-5 font-bold text-3xl top-[50%] translate-y-[-50%]"
        >
          <AiOutlineClose />
        </button>
        <h1 className="flex justify-center pt-1  text-xl font-robotoLight">
          Your Cart
        </h1>
      </div>
      <div className="mt-8 px-5">
        {cartItems.length > 0 ? (
          <Fragment>
            <ul>
              {cartItems.map((item) => {
                return <CartItem key={item.id} data={item} />;
              })}
            </ul>
            <span className="flex flex-col justify-between items-center mt-5">
              <span className="w-full font-robotoBold flex justify-between text-2xl">
                <h3>Total:</h3>
                <h3>{totalAmount}$</h3>
              </span>
              <button className='bg-hamBlue hover:bg-sky-500 text-white font-robotoBold w-full py-3 mt-5'>Check Out</button>
            </span>
          </Fragment>
        ) : (
          <div className=" h-1/3 flex flex-col justify-between items-center">
            <span className="text-xl font-robotoBold">
              <h2>Your cart is empty!</h2>
            </span>
            <span className="text-center pt-10 font-robotoLight text-lg">
              <p>Looks like you have not added anything to your cart</p>
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
