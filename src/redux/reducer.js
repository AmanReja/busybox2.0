import {
    ADD_PAYMENT,
    UPDATE_PAYMENT,
    GETALL_PAYMENT,
    DELETE_PAYMENT,
  } from "./action";
  
  const initialstate = {
    payment: [],
  };
  
  const paymentReducer = (state = initialstate, action) => {
    if (action.type === ADD_PAYMENT) {
      return {
        ...state,
        payment: [...state.payment, action.payload], 
      };
    } else if (action.type === GETALL_PAYMENT) {
      return {
        ...state,
        payment: action.payload, 
      };
    } else if (action.type === UPDATE_PAYMENT) {
      return {
        ...state,
        payment: state.payment.map((pmt) =>
          pmt.id === action.payload.id ? action.payload : pmt
        ),
      };
    } else if (action.type === DELETE_PAYMENT) {
      return {
        ...state,
        payment: state.payment.filter((pmt) => pmt.id !== action.payload),
      };
    } else {
      return state; 
    }
  };
  
  export default paymentReducer;
  