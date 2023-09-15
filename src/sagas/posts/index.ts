import { spawn } from 'redux-saga/effects';

import { postsSaga } from './posts.saga';

export default function* () {
  yield spawn(postsSaga);
}
