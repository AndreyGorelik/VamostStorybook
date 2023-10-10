import { getImagePath } from '@shared/utils/getImagePath';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { registerPhotoRequest } from 'src/api/registerPhoto';
import { Photo } from 'src/store/slices/profileSlice';
import {
  ADD_NEW_PHOTO,
  setPhoto,
  setPhotoError,
  setUploadingPhoto,
} from 'src/store/slices/user.slice';
import { Action } from 'src/types/actions/actions.types';

function* addNewPhotoWorker(action: Action<FormData[]>) {
  const { payload } = action;
  yield put(setUploadingPhoto(true));
  try {
    for (const image of payload) {
      const response: AxiosResponse<Photo> = yield call(registerPhotoRequest, { data: image });
      yield put(
        setPhoto({
          ...response.data,
          imagePath: getImagePath(response.data),
        })
      );
    }
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setPhotoError(error.response.data.message));
        }
      }
    }
  }
}

export function* accountSaga() {
  yield takeLatest(ADD_NEW_PHOTO, addNewPhotoWorker);
}
