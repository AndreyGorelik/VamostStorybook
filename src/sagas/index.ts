import { spawn } from 'redux-saga/effects';

import authSaga from './auth';
import postsSaga from './posts';
import profileSaga from './profile';

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(postsSaga);
  yield spawn(profileSaga);
}
