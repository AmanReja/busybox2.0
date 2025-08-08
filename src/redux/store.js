import { configureStore } from "@reduxjs/toolkit";
import paymentReducer from "./reducer";
 const store = configureStore({
    reducer: {
       payments:paymentReducer
    }
  })
export default store