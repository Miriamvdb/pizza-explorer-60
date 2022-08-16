import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzas/slice";
import userReducer from "./user/slice";
import restaurantReducer from "./restaurants/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    user: userReducer,
    restaurants: restaurantReducer,
  },
});

export default store;
