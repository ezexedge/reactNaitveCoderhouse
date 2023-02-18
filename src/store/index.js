import { createStore, combineReducers } from "redux";

import { categoryReducer, productReducer, cartReducer } from "./reducers";

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
  cart: cartReducer,
});

export default createStore(rootReducer);
