import {
  LOGIN_ERROR,
  MAKE_LOGIN,
  SET_LOADING,
  MAKE_LOGOUT,
  REGISTER_ERROR,
  REGISTER,
} from "../type";

let initialValue = {
  dataUser: JSON.parse(localStorage.getItem("dataUser")) || "",
  popupLogin: false,
  login: JSON.parse(localStorage.getItem("localLogin")) || false,
  loginErr: "",
  loading: false,
  registerErr: "",
  openModal: false,
  registerSuccess: "",
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
        registerSuccess: "",
        registerErr: "",
      };
    case MAKE_LOGOUT:
      localStorage.clear();
      return {
        ...state,
        login: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        registerErr: action.payload,
        registerSuccess: "",
      };
    case REGISTER:
      return {
        ...state,
        registerErr: "",
        // dataUser: action.payload,
        registerSuccess:
          "Congratulations register successful!!! Please login again!",
      };
    default:
      return state;
  }
}
