import { configureStore } from "@reduxjs/toolkit";
import TodoSlice from "./TodoSlice";
import cartReducer from "./cartSlice";
import favouriteReducer from "./favouriteRestaurantSlice";
const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    favourite: favouriteReducer,
    todoReducer:TodoSlice
  },
});

export default appStore;
