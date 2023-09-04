import { spawn } from 'redux-saga/effects';

import { logInRequestSaga } from './login.saga';
import { signUpSaga } from './register.saga';

export default function* () {
  yield spawn(logInRequestSaga);
  yield spawn(signUpSaga);
}
