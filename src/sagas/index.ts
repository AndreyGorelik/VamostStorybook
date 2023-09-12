import { spawn } from 'redux-saga/effects';

import authSaga from './auth';
import postsSaga from './posts';

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(postsSaga);
}
