import { spawn } from 'redux-saga/effects';

import authSaga from './auth';
import createPostSaga from './postCreate';
import postsSaga from './posts';

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(postsSaga);
  yield spawn(createPostSaga);
}
