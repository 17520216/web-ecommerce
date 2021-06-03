import { takeLatest } from "redux-saga/effects";
import {
  AUTH_FETCH_LOGIN,
  FETCH_PRODUCT,
  AUTH_FETCH_REGISTER,
  FETCH_UPDATE,
  FETCH_CATEGORY,
} from "../type";
import {
  fetchLogin,
  fetchProduct,
  fetchRegister,
  fetchUpdate,
  fetchCategory,
} from "./userSaga";

export default function* mySaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategory);
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(FETCH_UPDATE, fetchUpdate);
  yield takeLatest(AUTH_FETCH_REGISTER, fetchRegister);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
