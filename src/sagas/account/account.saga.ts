import Axios from 'axios';
import { call, takeLatest } from 'redux-saga/effects';
import { getProfileRequest } from 'src/api/getProfile';
import { registerPhotoRequest } from 'src/api/registerPhoto';
import { UPDATE_PHOTO } from 'src/store/slices/user.slice';
import { Action } from 'src/types/actions/actions.types';

function* updatePhotoWorker(action: Action<FormData[]>) {
  const { payload } = action;
  console.log('123123');

  try {
    for (const image of payload) {
      yield call(registerPhotoRequest, { data: image });
    }
    // yield call(getProfileRequest, '123123');
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          console.log(error);
        }
      }
    }
  }
}

export function* accountSaga() {
  yield takeLatest(UPDATE_PHOTO, updatePhotoWorker);
}
