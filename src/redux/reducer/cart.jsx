import { GET_CART, REMOVE_CART, INCREASE_CART, DECREASE_CART } from "../type";
const listCart = JSON.parse(localStorage.getItem("cart")) || [];
const num = listCart.length;
const amount = JSON.parse(localStorage.getItem("amount")) || 0;
let initialValue = {
  listCart: listCart,
  num: num,
  amount: amount,
  ship: 0,
};
export default function user(state = initialValue, action) {
  switch (action.type) {
    case GET_CART:
      let { listCart, amount, num } = state;
      const index = listCart.findIndex((e) => e._id === action.payload._id);
      if (index !== -1) {
        listCart[index].numCart++;
        amount += listCart[index].real_price;
      } else {
        action.payload.numCart = 1;
        listCart.push(action.payload);
        amount += action.payload.real_price;
      }
      localStorage.setItem("cart", JSON.stringify(listCart));
      localStorage.setItem("amount", JSON.stringify(amount));
      return {
        ...state,
        num: num + 1,
        listCart,
        amount,
      };
    case REMOVE_CART: {
      let { listCart, amount } = state;
      const index = listCart.findIndex((e) => e._id === action.payload);
      amount = amount - listCart[index].numCart * listCart[index].real_price;
      if (index >= 0) {
        listCart.splice(index, 1);
      }
      localStorage.removeItem("cart");
      localStorage.removeItem("amount");
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        num: state.num - 1,
        listCart,
        amount,
      };
    }
    case INCREASE_CART: {
      let { listCart, amount } = state;
      const index = listCart.findIndex((e) => e._id === action.payload);
      if (index >= 0) {
        listCart[index].numCart++;
        amount += listCart[index].real_price;
      }
      localStorage.removeItem("cart");
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        listCart,
        amount,
      };
    }
    case DECREASE_CART: {
      let { listCart, amount, num } = state;
      const index = listCart.findIndex((e) => e._id === action.payload);
      if (index >= 0) {
        amount -= listCart[index].real_price;
        listCart[index].numCart--;
        if (listCart[index].numCart === 0) {
          listCart.splice(index, 1);
          num -= 1;
        }
      }
      localStorage.setItem("amount", JSON.stringify(amount));
      localStorage.setItem("cart", JSON.stringify(listCart));
      return {
        ...state,
        listCart,
        amount,
        num,
      };
    }

    default:
      return state;
  }
}
