import { GET_CART, REMOVE_CART } from "../type";
let initialValue = {
  listCart: [],
  num: 0,
  amount: 0,
};
export default function user(state = initialValue, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        listCart: [...state.listCart, action.payload],
      };
    case REMOVE_CART:
      let { listCart } = state;
      const index = listCart.findIndex((e) => e._id === action.payload);
      console.log("index", index);
      console.log("activ", action.payload);
      if (index !== -1) {
        listCart.splice(index, 1);
      }
      return {
        ...state,
        listCart,
      };

    default:
      return state;
  }
}
