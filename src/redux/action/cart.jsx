import { GET_CART, REMOVE_CART } from "../type";
export function addCart(cart) {
  return {
    type: GET_CART,
    payload: cart,
  };
}
export function removeCart(id) {
  return {
    type: REMOVE_CART,
    payload: id,
  };
}
