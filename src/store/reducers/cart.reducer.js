/* eslint-disable no-case-declarations */
import { cartTypes } from "../types";

const { ADD_CART } = cartTypes;

const initialState = {
  orders: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,
        orders: [...state.orders, action.order],
      };
    default:
      return state;
  }
};

export default cartReducer;
