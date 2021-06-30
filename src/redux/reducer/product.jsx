import { GET_WISH_LIST, GET_PRODUCT, LOADING_PRO, GET_CATEGORY } from "../type";
let initialValue = {
  product: JSON.parse(localStorage.getItem("localProduct")) || [],
  paging: "",
  loading: true,
  categories: JSON.parse(localStorage.getItem("categories")) || [],
  wishlist: [],
};
export default function product(state = initialValue, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        paging: action.payload.paginate,
        loading: false,
      };
    case GET_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case LOADING_PRO:
      return {
        ...state,
        loading: true,
      };
    case GET_WISH_LIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
}
