import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzas/slice";
import userReducer from "./user/slice";

const store = configureStore({
  reducer: {
    pizzas: pizzaReducer,
    user: userReducer,
  },
});

export default store;
