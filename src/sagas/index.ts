import { spawn } from 'redux-saga/effects';

import authSaga from './auth';

export default function* rootSaga() {
  yield spawn(authSaga);
}
