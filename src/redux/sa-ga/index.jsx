import { takeLatest } from "redux-saga/effects";
import { AUTH_FETCH_LOGIN, FETCH_PRODUCT } from "../type";
import { fetchLogin, fetchProduct } from "./userSaga";

export default function* mySaga() {
  yield takeLatest(AUTH_FETCH_LOGIN, fetchLogin);
  yield takeLatest(FETCH_PRODUCT, fetchProduct);
}
