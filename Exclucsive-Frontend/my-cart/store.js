import { configureStore } from "@reduxjs/toolkit";
import Cart from "./src/components/Features/Cart"

const store = configureStore({
    reducer:{
        cart: Cart,
    }
})

export default store;