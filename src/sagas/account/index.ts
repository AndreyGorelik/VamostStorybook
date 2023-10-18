import { spawn } from 'redux-saga/effects';

import { accountSaga } from './account.saga';

export default function* () {
  yield spawn(accountSaga);
}
