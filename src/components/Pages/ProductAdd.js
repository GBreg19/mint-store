import React, { Fragment, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Input from "../UI/Input";
import Container from "../UI/Container";
import useForm from "../../hooks/useForm";
import { useSelector } from "react-redux";
import BreadCrumbs from "../Breadcrumbs/Breadcrumbs";
import Card from "../Layout/Card";

const ProductAdd = ({ data }) => {
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

      console.log(Object.keys(inputs))

      setValidate(
        inputValues.sku.length >= 1 &&
          inputValues.name.length >= 1 &&
          inputValues.price.length >= 1 &&
          inputValues.typeSwitcher !== "typeSwitcher"
           &&
          inputsLength > 0
      );
    }, 100);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValues, selected, validate]);

  return (
    <Fragment>
      <Card>
        <h1 className="md:text-4xl text-2xl font-robotoLight text-center">
          Add Your Product Here
        </h1>
        <BreadCrumbs items={data} />
      </Card>
      <Container>
        <form onSubmit={onSubmitHandler}>
          <h1 className="text-center text-2xl font-robotoBold">Add Product</h1>
          <div className="w-2/3 m-auto bg-white rounded-l-lg md:px-20 md:pb-10">
            <div>
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
            <Button className="w-full mt-2" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </Container>
    </Fragment>
  );
};

export default ProductAdd;
