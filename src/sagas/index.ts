import { spawn } from 'redux-saga/effects';

import authSaga from './auth';
import createPostSaga from './postCreate';

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(createPostSaga);
}
