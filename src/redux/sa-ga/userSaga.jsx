import { call, put } from "redux-saga/effects";
import {
  loginError,
  login,
  registerError,
  register,
  updateInfo,
} from "../action/user";
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

export function* fetchRegister({ payload }) {
  let res = yield call(userApi.register, payload);
  if (res.data) {
    yield put(register(res.data));
  } else if (res.error) {
    yield put(registerError(res.error));
  }
}
export function* fetchUpdate({ payload }) {
  let res = yield call(userApi.updateInfo, payload);
  if (res.data) {
    localStorage.setItem("dataUser", JSON.stringify(res.data));
    yield put(updateInfo(res.data));
  }
}
