import {
  LOGIN_ERROR,
  MAKE_LOGIN,
  SET_LOADING,
  HANDLE_LOGOUT,
  MAKE_LOGOUT,
  AUTH_FETCH_LOGIN,
} from "../type";

let initialValue = {
  dataUser: JSON.parse(localStorage.getItem("dataUser")) || "",
  popupLogin: false,
  login: JSON.parse(localStorage.getItem("localLogin")) || false,
  loginErr: "",
  loading: false,
};

export default function user(state = initialValue, action) {
  switch (action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loginErr: action.payload,
        loading: false,
      };
    case MAKE_LOGIN:
      return {
        ...state,
        dataUser: action.payload,
        login: true,
        loading: false,
        loginErr: "",
      };
    case MAKE_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: false,
      };
    case AUTH_FETCH_LOGIN:
      console.log("reducer");
      return state;
    default:
      return state;
  }
}
