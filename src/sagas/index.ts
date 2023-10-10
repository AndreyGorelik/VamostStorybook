import { spawn } from 'redux-saga/effects';

import authSaga from './auth';
import createPostSaga from './postCreate';
import postsSaga from './posts';
import profileSaga from './profile';
import requestsSaga from './requests';

export default function* rootSaga() {
  yield spawn(authSaga);
  yield spawn(postsSaga);
  yield spawn(createPostSaga);
  yield spawn(profileSaga);
  yield spawn(requestsSaga);
}
