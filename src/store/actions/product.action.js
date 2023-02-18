import { productsTypes } from "../types";

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

export const selectProduct = (id, precio) => ({
  type: SELECT_PRODUCT,
  productId: id,
  precio,
});

export const filterProducts = (id, precio) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
  precio,
});
