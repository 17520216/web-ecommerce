import { FETCH_PRODUCT, GET_PRODUCT } from "../type";
export function fetchProduct(page) {
  return {
    type: FETCH_PRODUCT,
    payload: page,
  };
}

export function getPro(res) {
  return {
    type: GET_PRODUCT,
    payload: res,
  };
}
