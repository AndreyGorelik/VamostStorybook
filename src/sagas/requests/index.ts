import { spawn } from 'redux-saga/effects';

import { requestsSaga } from './requests.saga';

export default function* () {
  yield spawn(requestsSaga);
}
