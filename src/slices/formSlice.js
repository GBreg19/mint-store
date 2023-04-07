import { createSlice, current } from "@reduxjs/toolkit";
import produce from "immer";

const initialState = {
  inputValues: {
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
  },
  selected: "typeSwitcher",
};

export const formSlice = createSlice({
  name: "form",
  initialState: initialState,
  reducers: {
    onSelectedChange: (state, action) => {
      state.selected = action.payload;
    },
    onChange: (state, action) => {
      const { name, value } = action.payload;
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
        console.log(selectedItem)
      return produce(state, (draftState) => {
        draftState.inputValues = selectedItem
      });
      
    },
  },
});

export const { onEdit, onChange, onSelectedChange, emptyValues } = formSlice.actions;

export default formSlice.reducer;
