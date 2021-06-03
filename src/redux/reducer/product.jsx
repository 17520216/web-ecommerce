import { GET_PRODUCT, LOADING_PRO } from "../type";
let initialValue = {
  product: JSON.parse(localStorage.getItem("localProduct")) || [],
  paging: "",
  loading: false,
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
    case LOADING_PRO:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
}
