import { GET_PRODUCT, LOADING_PRO, GET_CATEGORY } from "../type";
let initialValue = {
  product: JSON.parse(localStorage.getItem("localProduct")) || [],
  paging: "",
  loading: false,
  catagories: JSON.parse(localStorage.getItem("categories")) || [],
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
      console.log("run", action.payload);
      return {
        ...state,
        catagories: action.payload,
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
