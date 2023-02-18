import { EXTRA } from "../../constants/data/index";
import { sum } from "../../utils";
import { productsTypes } from "../types";

const { FILTER_PRODUCTS, SELECT_PRODUCT } = productsTypes;

const initialState = {
  products: EXTRA,
  filteredProducts: [],
  basePrice: 0,
  finalPrice: 0,
};

const productReducer = (state = initialState, action) => {
  console.log("sss", action);
  switch (action.type) {
    case SELECT_PRODUCT: {
      return {
        ...state,
        basePrice: action.precio,
      };
    }
    case FILTER_PRODUCTS: {
      return {
        ...state,
        filteredProducts: state.products.filter(
          (product) => product.categoryId === action.categoryId
        ),
        finalPrice: action.precio + sum(EXTRA, action.categoryId),
      };
    }
    default:
      return state;
  }
};

export default productReducer;
