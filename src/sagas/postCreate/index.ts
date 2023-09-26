import { spawn } from 'redux-saga/effects';

import { postCreateSaga } from './createPost.saga';

export default function* () {
  yield spawn(postCreateSaga);
}
