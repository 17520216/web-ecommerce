import { GET_PRODUCT } from "../type";
let initialValue = {
  product: JSON.parse(localStorage.getItem("localProduct")) || "",
  paging: "",
};
export default function user(state = initialValue, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        product: action.payload,
        paging: action.payload.paginate,
      };

    default:
      return state;
  }
}
