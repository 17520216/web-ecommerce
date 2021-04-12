import {
  LOGIN_ERROR,
  AUTH_FETCH_LOGIN,
  MAKE_LOGIN,
  MAKE_LOGOUT,
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
