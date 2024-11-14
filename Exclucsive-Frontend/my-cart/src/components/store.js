import { configureStore } from "@reduxjs/toolkit";
import Cart from './Home/Features/Cart';

const store = configureStore({
  reducer: {
    cart: Cart,
  },
});

export default store;
