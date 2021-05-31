import { takeLatest } from "redux-saga/effects";
import { AUTH_FETCH_LOGIN, FETCH_PRODUCT, AUTH_FETCH_REGISTER } from "../type";
import { fetchLogin, fetchProduct, fetchRegister } from "./userSaga";

export default function* mySaga() {
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(AUTH_FETCH_REGISTER, fetchRegister);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
