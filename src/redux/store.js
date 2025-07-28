import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./reducer";
export const store = configureStore({
    reducer: {
       payments:paymentReducer
    }
  })
