import { getImagePath } from '@shared/utils/getImagePath';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { registerPhotoRequest } from 'src/api/auth/registerPhoto';
import { deleteUserPhotoRequest } from 'src/api/deleteUserPhoto';
import { Photo } from 'src/store/slices/profileSlice';
import {
  ADD_NEW_PHOTO,
  DELETE_USER_PHOTO,
  removePhoto,
  setDeletePhotoError,
  setDeletingPhoto,
  setPhoto,
  setPhotoError,
  setUploadingPhoto,
} from 'src/store/slices/user.slice';
import { Action } from 'src/types/actions/actions.types';

function* addNewPhotoWorker(action: Action<string>) {
  const { payload } = action;

  try {
    for (const image of JSON.parse(payload)) {
      const formData = new FormData();
      formData.append('imageData', image as any);

      yield put(setUploadingPhoto(true));

      const response: AxiosResponse<Photo> = yield call(registerPhotoRequest, { data: formData });

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

function* deletePhotoWorker(action: Action<string>) {
  const { payload } = action;
  yield setDeletingPhoto(true);

  try {
    const response: AxiosResponse<Photo> = yield call(deleteUserPhotoRequest, payload);
    yield put(removePhoto(response.data._id));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setDeletePhotoError(error.response.data.message));
        }
      }
    }
  }
}

export function* accountSaga() {
  yield takeLatest(ADD_NEW_PHOTO, addNewPhotoWorker);
  yield takeLatest(DELETE_USER_PHOTO, deletePhotoWorker);
}
