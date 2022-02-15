import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import authReducer from "./authSlice";

export const store = configureStore({
  reducer: { user: userReducer, auth: authReducer },
});
