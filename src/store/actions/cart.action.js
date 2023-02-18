import { cartTypes } from "../types/index";

const { ADD_CART } = cartTypes;

export const addCart = (order) => ({
  type: ADD_CART,
  order,
});
