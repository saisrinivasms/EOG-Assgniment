import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import API from "../api";
import * as actions from "../actions";

function* watchGetDroneData() {
  const { error, data } = yield call(API.getDroneData);
  if (error) {
    yield put({ type: actions.API_ERROR, code: error.code });
    yield cancel();
    return;
  }
  yield put({ type: actions.DRONE_DATA_RECEIVED, data: data });
}

function* watchAppLoad() {
  yield all([takeEvery(actions.FETCH_DRONE_DATA, watchGetDroneData)]);
}

export default [watchAppLoad];
