import { call, put } from "redux-saga/effects";
import { loginError, login, logout } from "../action/user";
import userApi from "../../api/userApi";
import productApi from "../../api/productApi";
import { getPro } from "../action/product";
export function* fetchLogin({ payload }) {
  let res = yield call(userApi.login, payload);
  if (res.error) {
    yield put(loginError(res.error));
  } else {
    localStorage.setItem("tokenUser", JSON.stringify(res.data.token));
    localStorage.setItem("dataUser", JSON.stringify(res.data));
    localStorage.setItem("localLogin", JSON.stringify(true));
    yield put(login(res.data));
  }
}
export function* fetchProduct({ payload }) {
  let res = yield call(productApi.product, payload);
  localStorage.setItem("localProduct", JSON.stringify(res));
  yield put(getPro(res));
}
