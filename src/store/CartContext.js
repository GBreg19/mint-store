import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);
  const [amount, setAmount] = useState(1);
  const [total, setTotal] = useState(null);
  const [totalItems, setTotalItems] = useState(null);

  const addToCart = (item) => {
    const existingItem = cartItems.find((it) => it.id === item.id);
    if (existingItem) {
      existingItem.amount += 1;
      setAmount((prevState) => (prevState += 1));
    } else {
      setCartItems([...cartItems, { ...item, amount: amount }]);
    }
    // setTotalItems(cartItems.length * existingItem.amount);
    // setTotal(amount * item.price);
  };

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const incrementCartItem = (id) => {
    const existingItem = cartItems.find((it) => it.id === id);
    existingItem.amount += 1;
    setAmount((prevState) => (prevState += 1));
  };

  const decrementCartItem = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem.amount > 1) {
      existingItem.amount -= 1;
      setAmount((prevState) => (prevState -= 1));
    } else {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== id));
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        isClicked,
        setIsClicked,
        amount,
        incrementCartItem,
        decrementCartItem,
        total,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
