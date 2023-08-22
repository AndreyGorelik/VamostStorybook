import { put, takeLatest } from 'redux-saga/effects';

import { LOGIN_USER, loginUserSuccess, setAuthError } from '../../store/slices/settingsSlice';

const logIn = async () => {
  const request = await fetch('https://jsonplaceholder.typicode.com/todos/12');
  const data = await request.json();

  if (data.id === 1) {
    return true;
  } else {
    return false;
  }
};

function* logInRequestWorker() {
  const data: boolean = yield logIn();

  if (data) {
    yield put(loginUserSuccess());
    yield put(setAuthError(null));
  } else {
    yield put(setAuthError('something went wrong'));
  }
}

export function* logInRequestSaga() {
  yield takeLatest(LOGIN_USER, logInRequestWorker);
}
