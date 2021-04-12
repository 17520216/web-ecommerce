import { combineReducers } from "redux";
import user from "./user";
import product from "./product";
import cart from "./cart";

let reducers = combineReducers({
  user: user,
  product: product,
  cart: cart,
});
export default reducers;
