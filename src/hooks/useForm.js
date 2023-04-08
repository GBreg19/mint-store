import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyValues, onChange, onSelectedChange } from "../slices/formSlice";

const useForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const inputValues = useSelector((state) => state.form.inputValues);

  const [errorTxts, setErrorTxts] = useState({});
  const [validate, setValidate] = useState(false);

  const onSelectHandler = (e) => {
    const value = e.target.value;
    dispatch(onSelectedChange(value));
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onChange({ name, value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const errorMsg = {};

    if (inputValues.sku.length < 1) {
      errorMsg.sku = "Please, submit required 'SKU";
    }
    if (inputValues.name.length < 1) {
      errorMsg.name = "Please, submit required name";
    }
    if (inputValues.price.length < 1) {
      errorMsg.price = "Please, submit required price";
    }
    if (inputValues.typeSwitcher === "typeSwitcher") {
      errorMsg.type = "Please, submit required type";
    }
    if (inputValues.typeSwitcher === "dvd" && inputValues.dvd.size.length < 1) {
      errorMsg.dvdSize = "Please, submit size";
    }
    if (
      inputValues.typeSwitcher === "book" &&
      inputValues.book.weight.length < 1
    ) {
      errorMsg.bookWeight = "Please submit weight";
    }
    if (
      inputValues.typeSwitcher === "furniture" &&
      inputValues.furniture.height.length < 1
    ) {
      errorMsg.furnHeight = "Please submit height";
    }
    if (
      inputValues.typeSwitcher === "furniture" &&
      inputValues.furniture.length.length < 1
    ) {
      errorMsg.furnLength = "Please submit length";
    }
    if (
      inputValues.typeSwitcher === "furniture" &&
      inputValues.furniture.width.length < 1
    ) {
      errorMsg.furnWidth = "Please submit width";
    }
    setErrorTxts(errorMsg);

    if (validate) {
      try {
        const resp = await axios.get("http://localhost:3004/products");
        const products = resp.data;
        
        const existingProductIndex = products.findIndex(product => product.id === inputValues.id);
        
        if (existingProductIndex >= 0) {
          const existingProduct = products[existingProductIndex];
          const updatedProduct = { ...existingProduct, ...inputValues };
          
          await axios.put(`http://localhost:3004/products/${existingProduct.id}`, updatedProduct);
        } else {
          await axios.post("http://localhost:3004/products", inputValues);
        }
      } catch (e) {
        console.log(e);
      }

      navigate("/");
      dispatch(
        emptyValues({
          sku: "",
          name: "",
          price: "",
          typeSwitcher: "",
          dvd: {
            size: "",
          },
          book: {
            weight: "",
          },
          furniture: {
            height: "",
            width: "",
            length: "",
          },
        })
      );
    }
  };
  return {
    inputValues,
    errorTxts,
    setErrorTxts,
    validate,
    setValidate,
    onSelectHandler,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useForm;
