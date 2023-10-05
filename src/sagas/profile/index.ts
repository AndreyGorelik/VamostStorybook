import { spawn } from 'redux-saga/effects';

import { profileSaga } from './profile.saga';

export default function* () {
  yield spawn(profileSaga);
}
