import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './slices/cartSlice'
import formReducer from './slices/formSlice'

export default configureStore({
    reducer: {
        cart: cartReducer,
        form: formReducer
    }
})