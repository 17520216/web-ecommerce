import {
  LOGIN_ERROR,
  AUTH_FETCH_LOGIN,
  MAKE_LOGIN,
  MAKE_LOGOUT,
  REGISTER,
  AUTH_FETCH_REGISTER,
  REGISTER_ERROR,
} from "../type";
export function fetchLogin(form) {
  return {
    type: AUTH_FETCH_LOGIN,
    payload: form,
  };
}
export function loginError(data) {
  return {
    type: LOGIN_ERROR,
    payload: data,
  };
}
export function login(data) {
  return {
    type: MAKE_LOGIN,
    payload: data,
  };
}
export function logout() {
  return {
    type: MAKE_LOGOUT,
    payload: false,
  };
}
export function fetchRegister(data) {
  return {
    type: AUTH_FETCH_REGISTER,
    payload: data,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}
export function registerError(data) {
  return {
    type: REGISTER_ERROR,
    payload: data,
  };
}
