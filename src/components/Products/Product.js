import axios from "axios";
import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
  calculateTotal,
} from "../../slices/cartSlice";
import { FaTrash, FaPencilAlt } from "react-icons/fa";
import { AiOutlineClose, AiOutlineSetting } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { onEdit } from "../../slices/formSlice";
import { BiCartAdd, BiHeart } from "react-icons/bi";

const Product = ({ item, data, setData, className }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isWindowOpen, setIsWindowOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRemove = async (id) => {
    try {
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

  const onAddWishlistHandler = (id) => {
    const addedItem = data.find((item) => item.id === id);
    dispatch(addToWishlist(addedItem));
  };

  return (
    <div
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      className={`lg:py-2 bg-white 2xl:w-96 lg:w-80 w-72 border border-gray-200 hover:bg-gray-100 rounded-lg shadow pt-5 2xl:px-10 px-5 pb-5 flex flex-col justify-between h-56 transition-transform duration-300 ease-in-out relative ${
        className ? className : ""
      }`}
    >
      <div
        className={`flex flex-col justify-between h-56 ${
          isHovered ? "blur-[3px]" : ""
        }`}
      >
        <div className="flex">
          <span className="basis-6/12 mr-10">
            <h3 className="border-b-2 border-white-900 pb-1 mb-3 mr-5">
              Title
            </h3>
            <h5 className="font-semibold tracking-tight text-gray-900 font-robotoBold">
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
            <h3 className="text-xl font-bold text-gray-900 font-robotoReg">
              ${item.price}
            </h3>
          </span>
        </div>
      </div>
      <div
        className={`absolute left-0 top-0 w-full h-full transition-opacity duration-700 flex ${
          isHovered ? "opacity-100 z-50" : "opacity-0"
        }`}
      >
        <div className="w-44 h-10 flex justify-between place-self-center m-auto">
          <div>
            <button onClick={() => onAddCartHandler(item.id)}>
              <BiCartAdd
                className="text-5xl hover:text-sky-500"
                title="Add to Cart"
              />
            </button>
          </div>
          <div>
            <button onClick={() => onAddWishlistHandler(item.id)}>
              <BiHeart
                className="text-5xl hover:text-sky-500"
                title="Add to Wishlist"
              />
            </button>
          </div>
          <div>
            <button onClick={() => setIsWindowOpen(!isWindowOpen)}>
              <AiOutlineSetting
                className="text-5xl hover:text-sky-500"
                title="Settings"
              />
            </button>
          </div>
        </div>
      </div>
      <div>
        {isWindowOpen && isHovered && (
          <div className="absolute flex justify-between top-0 right-0 p-2 w-[100px] rounded-tr-lg rounded-bl-sm font-robotoLight transform transition duration-500 z-50 $">
            <button title="Edit" onClick={() => onEditHandler(item.id)}>
              <FaPencilAlt className="text-xl" />
            </button>
            <button className="text-[19px]" title="Remove" onClick={() => onDeleteHandler(item.id)}>
              <FaTrash />
            </button>
            <button title="Close" onClick={() => setIsWindowOpen(false)}>
              <AiOutlineClose className="text-2xl" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Product;
