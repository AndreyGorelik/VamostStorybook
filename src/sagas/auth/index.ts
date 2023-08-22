import { fork } from 'redux-saga/effects';

import { logInRequestSaga } from './login.saga';

export default function* () {
  yield fork(logInRequestSaga);
}
