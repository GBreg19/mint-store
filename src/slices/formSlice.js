import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  inputValues: {
    sku: "",
    name: "",
    price: "",
    image: '',
    typeSwitcher: "typeSwitcher",
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
  },
  selected: "typeSwitcher",
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    onChange: (state, action) => {
      const { name, value } = action.payload;
      // console.log(files[0])
      return produce(state, (draftState) => {
        if (name === "size") {
          draftState.inputValues.dvd.size = value;
        } else if (name === "weight") {
          draftState.inputValues.book.weight = value;
        } else if (name === "height") {
          draftState.inputValues.furniture.height = value;
        } else if (name === "width") {
          draftState.inputValues.furniture.width = value;
        } else if (name === "length") {
          draftState.inputValues.furniture.length = value;
        } else {
          draftState.inputValues[name] = value;
        }
      });
    },
    emptyValues: (state, action) => {
        return produce(state, (draftState) => {
          draftState.inputValues = action.payload;
        });
    },
    onEdit: (state, action) => {
        const selectedItem  = action.payload;
      return produce(state, (draftState) => {
        draftState.inputValues = selectedItem
      });
      
    },
  },
});

export const { onEdit, onChange, onSelectedChange, emptyValues } = formSlice.actions;

export default formSlice.reducer;
