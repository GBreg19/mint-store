import React, { Fragment } from "react";
import Container from "../UI/Container";
import Card from "../Layout/Card";
import Button from "../UI/Button";
import { useDispatch, useSelector } from "react-redux";
import WishlistItem from "../Cart/WishlistItem";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { clearWishlist } from "../../slices/cartSlice";

const Wishlist = () => {
  const { wishlistItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch()
  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Wishlist
        </h1>
      </Card>
      <Container>
        {wishlistItems.length ? (
          <>
            <div className="grid grid-cols-4 bg-gray-200 py-2 px-3">
              <h1>Product Title</h1>
              <h1>Unit Price</h1>
            </div>
            <div>
              <ul>
                {wishlistItems.map((item) => {
                  return <WishlistItem key={item.id} data={item} />;
                })}
              </ul>
            </div>
            <div className="text-right mt-5">
              <Button className="font-robotoLight rounded-none" onClick={() => dispatch(clearWishlist())}>
                Clear Wishlist
              </Button>
            </div>
          </>
        ) : (
          <div className="w-full">
            <div className="h-52 flex flex-col justify-between items-center">
              <span>
                <BiHeart className="text-9xl" />
              </span>
              <h1>No items found in wishlist!</h1>
              <Button
                className="rounded-none px-12"
                onClick={() => navigate("/products")}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </Container>
    </Fragment>
  );
};

export default Wishlist;
