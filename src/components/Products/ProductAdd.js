import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import eCommerce from "../../Images/e-commerce.png";
import Container from "../UI/Container";
import useForm from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { onChange } from "../../slices/formSlice";

const ProductAdd = () => {
  const {
    errorTxts,
    setErrorTxts,
    validate,
    setValidate,
    selected,
    onChangeHandler,
    onSubmitHandler,
  } = useForm();

  const inputValues = useSelector((state) => state.form.inputValues);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValues.sku.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, sku: "" };
        });
      }
      if (inputValues.name.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, name: "" };
        });
      }
      if (inputValues.price.length >= 1) {
        setErrorTxts((prevState) => {
          return { ...prevState, price: "" };
        });
      }
      if (inputValues.typeSwitcher !== "typeSwitcher") {
        setErrorTxts((prevState) => {
          return { ...prevState, type: "" };
        });
      }
      if (
        inputValues.typeSwitcher === "dvd" &&
        inputValues.dvd.size.length >= 1
      ) {
        setErrorTxts((prevState) => {
          return { ...prevState, dvdSize: "" };
        });
      }
      if (
        inputValues.typeSwitcher === "book" &&
        inputValues.book.weight.length >= 1
      ) {
        setErrorTxts((prevState) => {
          return { ...prevState, bookWeight: "" };
        });
      }
      if (
        inputValues.typeSwitcher === "furniture" &&
        inputValues.furniture.height.length >= 1
      ) {
        setErrorTxts((prevState) => {
          return { ...prevState, furnHeight: "" };
        });
      }
      if (
        inputValues.typeSwitcher === "furniture" &&
        inputValues.furniture.width.length >= 1
      ) {
        setErrorTxts((prevState) => {
          return { ...prevState, furnWidth: "" };
        });
      }
      if (
        inputValues.typeSwitcher === "furniture" &&
        inputValues.furniture.length.length >= 1
      ) {
        setErrorTxts((prevState) => {
          return { ...prevState, furnLength: "" };
        });
      }

      const inputs = inputValues[inputValues.typeSwitcher];
      const inputsLength = Object.keys(inputs).filter(
        (key) => inputs[key].length > 0
      ).length;

      setValidate(
        inputValues.sku.length >= 1 &&
          inputValues.name.length >= 1 &&
          inputValues.price.length >= 1 &&
          inputValues.typeSwitcher !== "typeSwitcher" &&
          inputsLength > 0
      );
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValues, selected, validate]);

  return (
    <Container>
      <form onSubmit={onSubmitHandler}>
        <div className="flex justify-between items-center py-2 border-b-2 mb-8">
          <div>
            <h1 className="text-4xl font-robotoLight">Product Add</h1>
          </div>
          <div>
            <ul className="flex justify-between w-44">
              <li>
                <Button type="submit">Submit</Button>
              </li>
              <li>
                <Button
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Cancel
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-white-900 rounded-lg bg-gradient-to-r from-white to-hamLightBlue">
          <div className="flex items-center border-2 border-white-900 rounded-lg">
            <div className="basis-2/5 bg-white rounded-l-lg md:px-20 md:pb-10">
              <div className="mb-5 w-8/12 m-auto flex flex-col justify-center items-center">
                <img src={eCommerce} width="300" className="my-10" />
                <h1 className="text-center font-robotoLight text-xl ">
                  Thank you for visiting our website! We're glad to hear that
                  you're interested in adding a product to our platform.
                </h1>
              </div>
              <div className="user-inputs">
                <label>SKU</label>
                <Input
                  name="sku"
                  value={inputValues.sku}
                  onChange={onChangeHandler}
                  placeholder="Stock keeping unit"
                />
                {errorTxts.sku && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.sku}
                  </p>
                )}
              </div>
              <div>
                <label>Name</label>
                <Input
                  name="name"
                  value={inputValues.name}
                  onChange={onChangeHandler}
                  placeholder="Name"
                />
                {errorTxts.name && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.name}
                  </p>
                )}
              </div>
              <div>
                <label>Price ($)</label>
                <Input
                  name="price"
                  value={inputValues.price}
                  onChange={onChangeHandler}
                  placeholder="Price in dollars"
                />
                {errorTxts.price && (
                  <p className="text-red-600 font-robotoLight font-bold">
                    {errorTxts.price}
                  </p>
                )}
              </div>
              <div>
                <label>Select type of product</label>
                <select
                  name="typeSwitcher"
                  value={inputValues.typeSwitcher}
                  onChange={onChangeHandler}
                  className="form-select appearance-none
              block
      w-full
      px-1
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      mb-3
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none cursor-pointer"
                >
                  <option value="typeSwitcher" disabled>
                    Type Switcher
                  </option>
                  <option value="dvd">DVD</option>
                  <option value="book">Book</option>
                  <option value="furniture">Furniture</option>
                </select>
              </div>
              {inputValues.typeSwitcher === "dvd" ? (
                <div>
                  <label>Size (MB)</label>
                  <Input
                    name="size"
                    placeholder="Size"
                    value={inputValues.dvd.size}
                    onChange={onChangeHandler}
                  />
                  {errorTxts.dvdSize && (
                    <p className="text-red-600 font-robotoLight font-bold">
                      {errorTxts.dvdSize}
                    </p>
                  )}
                </div>
              ) : inputValues.typeSwitcher === "book" ? (
                <div>
                  <label>Weight (KG)</label>
                  <Input
                    name="weight"
                    placeholder="Weight"
                    value={inputValues.book.weight}
                    onChange={onChangeHandler}
                  />
                  {errorTxts.bookWeight && (
                    <p className="text-red-600 font-robotoLight font-bold">
                      {errorTxts.bookWeight}
                    </p>
                  )}
                </div>
              ) : inputValues.typeSwitcher === "furniture" ? (
                <div>
                  <label>Height (CM)</label>
                  <Input
                    name="height"
                    placeholder="Height"
                    value={inputValues.furniture.height}
                    onChange={onChangeHandler}
                  />
                  {errorTxts.furnHeight && (
                    <p className="text-red-600 font-robotoLight font-bold">
                      {errorTxts.furnHeight}
                    </p>
                  )}
                  <label>Width (CM)</label>
                  <Input
                    name="width"
                    placeholder="Width"
                    value={inputValues.furniture.width}
                    onChange={onChangeHandler}
                  />
                  {errorTxts.furnWidth && (
                    <p className="text-red-600 font-robotoLight font-bold">
                      {errorTxts.furnWidth}
                    </p>
                  )}
                  <label>Length (CM)</label>
                  <Input
                    name="length"
                    placeholder="Length"
                    value={inputValues.furniture.length}
                    onChange={onChangeHandler}
                  />
                  {errorTxts.furnLength && (
                    <p className="text-red-600 font-robotoLight font-bold">
                      {errorTxts.furnLength}
                    </p>
                  )}
                </div>
              ) : null}
              {errorTxts.type && (
                <p className="text-red-600 font-robotoLight font-bold">
                  {errorTxts.type}
                </p>
              )}
            </div>
            <div className="basis-3/5 h-74 py-0 px-24 lg:w-6/12 flex flex-col text-white justify-center items-center lg:rounded-r-lg rounded-b-lg lg:rounded-bl-none">
              <h1 className="uppercase font-robotoBold text-xl mb-10">
                add your product on our website and become a successful seller
              </h1>
              <p className="font-robotoLight text-lg mb-5">
                Our website is designed to be user-friendly, and we've made the
                process of adding a product as simple as possible.
              </p>
              <p className="font-robotoLight text-lg mb-5">
                To get started, simply enter all the necessary information about
                your product, such as the product SKU(Stock keeping unit) name,
                price and description of your product after choosing a type
              </p>
              <p className="font-robotoLight text-lg mb-5">
                Please be as detailed as possible when filling out the
                information, as this will help potential customers make an
                informed decision about your product.
              </p>
              <p className="font-robotoLight text-lg mb-5">
                Once you've entered all the necessary information, simply click
                the "Submit" button and your product will be added to our
                website. Our team will review the product to ensure it meets our
                guidelines and is a good fit for our platform. If there are any
                issues, we'll be sure to reach out to you directly.
              </p>
            </div>
          </div>
        </div>
      </form>
    </Container>
  );
};

export default ProductAdd;
