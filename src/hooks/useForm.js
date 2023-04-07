import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { emptyValues, onChange, onSelectedChange } from "../slices/formSlice";

const useForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { inputValues, selected } = useSelector((state) => ({
    inputValues: state.form.inputValues,
    selected: state.form.selected,
  }));

  // const [inputValues, setInputValues] = useState({
  //   sku: "",
  //   name: "",
  //   price: "",
  //   typeSwitcher: "",
  //   dvd: {
  //     size: "",
  //   },
  //   book: {
  //     weight: "",
  //   },
  //   furniture: {
  //     height: "",
  //     width: "",
  //     length: "",
  //   },
  // });

  const [errorTxts, setErrorTxts] = useState({});
  const [validate, setValidate] = useState(false);
  // const [selected, setSelected] = useState("typeSwitcher");

  const onSelectHandler = (e) => {
    const value = e.target.value;
    dispatch(onSelectedChange(value));
    // setSelected(e.target.value);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    dispatch(onChange({ name, value }));
    // setInputValues({ ...inputValues, [name]: value });
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
    if (selected === "typeSwitcher") {
      errorMsg.type = "Please, submit required type";
    }
    if (selected === "dvd" && inputValues.dvd.size.length < 1) {
      errorMsg.dvdSize = "Please, submit size";
    }
    if (selected === "book" && inputValues.book.weight.length < 1) {
      errorMsg.bookWeight = "Please submit weight";
    }
    if (selected === "furniture" && inputValues.furniture.height.length < 1) {
      errorMsg.furnHeight = "Please submit height";
    }
    if (selected === "furniture" && inputValues.furniture.length.length < 1) {
      errorMsg.furnLength = "Please submit length";
    }
    if (selected === "furniture" && inputValues.furniture.width.length < 1) {
      errorMsg.furnWidth = "Please submit width";
    }
    setErrorTxts(errorMsg);

    if (validate) {
      try {
        await axios.post("http://localhost:3004/products", inputValues);
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
    selected,
    // setInputValues,
    onSelectHandler,
    onChangeHandler,
    onSubmitHandler,
  };
};

export default useForm;
