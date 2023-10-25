import { PersonalInfoValues } from '@screens/user/account/components/personalInfo/personalInfo.types';
import { getImagePath } from '@shared/utils/getImagePath';
import Axios, { AxiosResponse } from 'axios';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { registerAttributesRequest } from 'src/api/auth/registerAttributes';
import { registerBirthDateRequest } from 'src/api/auth/registerBirthDate';
import { registerEmailRequest } from 'src/api/auth/registerEmail';
import { registerNicknameRequest } from 'src/api/auth/registerNickname';
import { registerPhotoRequest } from 'src/api/auth/registerPhoto';
import { deleteUserPhotoRequest } from 'src/api/user/deleteUserPhoto';
import { getUserRequestsRequest } from 'src/api/user/getUserRequests';
import { Photo } from 'src/store/slices/profileSlice';
import {
  ADD_NEW_PHOTO,
  DELETE_USER_PHOTO,
  GET_USER_REQUESTS,
  UPDATE_PERSONAL_INFO,
  removePhoto,
  setDeletePhotoError,
  setDeletingPhoto,
  setEditedUserInfo,
  setPhoto,
  setPhotoError,
  setSavingEditedInfo,
  setSavingEditedInfoError,
  setUploadingPhoto,
  setUserRequests,
  setUserRequestsError,
} from 'src/store/slices/user.slice';
import { Action } from 'src/types/actions/actions.types';
import { PostRequest } from 'src/types/api/getPosts';

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

function* updatePersonalInfoWorker(action: Action<PersonalInfoValues>) {
  const { payload } = action;

  try {
    yield put(setSavingEditedInfo(true));

    const { email, nickname, birthdate, gender, sexualOrientation, shownGender } = yield select(
      (state) => state.userSlice
    );

    if (payload.email !== email) {
      yield call(registerEmailRequest, {
        data: { email: payload.email },
      });
    }

    if (payload.nickname !== nickname) {
      yield call(registerNicknameRequest, {
        data: {
          nickName: payload.nickname,
        },
      });
    }

    if (payload.birthdate !== birthdate) {
      yield call(registerBirthDateRequest, {
        data: {
          birthDate: payload.birthdate,
        },
      });
    }

    if (
      JSON.stringify(payload.gender) !== JSON.stringify(gender) ||
      JSON.stringify(payload.sexualOrientation) !== JSON.stringify(sexualOrientation) ||
      payload.shownGender !== shownGender
    ) {
      yield call(registerAttributesRequest, {
        data: {
          gender: payload.gender,
          sexualOrientation: payload.sexualOrientation,
          shownGender: payload.shownGender,
        },
      });
    }

    yield put(setEditedUserInfo(action.payload));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setSavingEditedInfoError(error.response.data.message));
        }
      }
    }
  }
}

export function* getUserRequestsWorker(action: Action<{ id: string }>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(getUserRequestsRequest, {
      ...action.payload,
    });
    yield put(setUserRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setUserRequestsError(error.response.data));
      }
    }
  }
}

export function* accountSaga() {
  yield takeLatest(ADD_NEW_PHOTO, addNewPhotoWorker);
  yield takeLatest(DELETE_USER_PHOTO, deletePhotoWorker);
  yield takeLatest(UPDATE_PERSONAL_INFO, updatePersonalInfoWorker);
  yield takeLatest(GET_USER_REQUESTS, getUserRequestsWorker);
}
