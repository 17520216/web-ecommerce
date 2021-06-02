import { takeLatest } from "redux-saga/effects";
import {
  AUTH_FETCH_LOGIN,
  FETCH_PRODUCT,
  AUTH_FETCH_REGISTER,
  FETCH_UPDATE,
} from "../type";
import {
  fetchLogin,
  fetchProduct,
  fetchRegister,
  fetchUpdate,
} from "./userSaga";

export default function* mySaga() {
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(FETCH_UPDATE, fetchUpdate);
  yield takeLatest(AUTH_FETCH_REGISTER, fetchRegister);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
