import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "../UI/Button";
import { addToCart, calculateTotal } from "../../slices/cartSlice";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onEdit } from "../../slices/formSlice";

const Product = ({ item, data, setData }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const onRemove = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:3004/products/${id}`
      );
      const filteredArr = data.filter((filItem) => filItem.id !== id);
      setData(filteredArr);
    } catch (e) {
      console.log(e);
    }
  };

  const onDeleteHandler = (id) => {
    onRemove(id);
  };

  const onEditHandler = async (id) => {
    navigate("product-add");
    try {
      const resp = await axios.get(`http://localhost:3004/products/${id}`);
      dispatch(onEdit(resp.data));
    } catch (e) {
      console.log(e);
    }
  };

  const onAddCartHandler = (id) => {
    const addedItem = data.find((item) => item.id === id);
    dispatch(addToCart(addedItem));
    dispatch(calculateTotal());
  };

  return (
    <div className="bg-white max-w-sm border border-gray-200 hover:bg-gray-100 duration-1000 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative pt-5">
      <div className="px-5 pb-5 flex flex-col justify-between h-56">
        <div className="flex">
          <span className="basis-6/12 mr-10">
            <h3 className="border-b-2 border-white-900 pb-1 mb-3 mr-5">
              Title
            </h3>
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white font-robotoBold">
              {item.name}
            </h5>
          </span>
          <span className="font-robotoLight">
            <h3 className="border-b-2 border-white-900 pb-1 mb-3">Details</h3>
            {item.dvd.size && <p>Size: {item.dvd.size}</p>}
            {item.book.weight && <p>Weight: {item.book.weight}</p>}
            {item.furniture.width &&
              item.furniture.height &&
              item.furniture.length && (
                <Fragment>
                  <p>Height: {item.furniture.height}</p>
                  <p>Width: {item.furniture.width}</p>
                  <p>Length: {item.furniture.length}</p>
                </Fragment>
              )}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span>
            <h3 className="border-b-2 border-white-900 pb-1 mb-3">Price</h3>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white font-robotoReg">
              ${item.price}
            </h3>
          </span>
          <Button onClick={() => onAddCartHandler(item.id)}>Add to cart</Button>
        </div>
      </div>
      <span>
        <button
          onClick={() => setIsWindowOpen(true)}
          title="Options"
          className="absolute -top-2 right-3 text-4xl font-robotoReg"
        >
          ...
        </button>
        {isWindowOpen && (
          <div className="absolute flex justify-between top-0 right-0 bg-gray-200 p-2 w-[90px] duration-1000 rounded-tr-lg rounded-bl-sm font-robotoLight transform transition duration-500">
            <button title="Edit" onClick={() => onEditHandler(item.id)}>
              <FaPencilAlt />
            </button>
            <button title="Remove" onClick={() => onDeleteHandler(item.id)}>
              <FaTrash />
            </button>
            <button title="Close" onClick={() => setIsWindowOpen(false)}>
              <AiOutlineClose className="text-xl" />
            </button>
          </div>
        )}
      </span>
    </div>
  );
};

export default Product;
