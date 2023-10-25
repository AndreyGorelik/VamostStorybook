import { LOGIN_USER, REFRESH } from '@shared/constants/actions';
import { getImagePath } from '@shared/utils/getImagePath';
import { saveTokens } from '@shared/utils/saveTokens';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { refreshRequest } from 'src/api/auth/refresh';
import { signInRequest } from 'src/api/auth/signIn';
import { loginUserSuccess, logoutUser, setAuthError } from 'src/store/slices/auth.slice';
import { setUser } from 'src/store/slices/user.slice';
import { Action, LoginUser } from 'src/types/actions/actions.types';
import { RefreshResponse } from 'src/types/api/refresh.types';
import { SignInResponse } from 'src/types/api/signIn.types';

function* logInRequestWorker(action: Action<LoginUser>) {
  try {
    const response: AxiosResponse<SignInResponse> = yield call(signInRequest, action.payload);
    const data = response.data;

    yield call(saveTokens, data.tokens.refreshToken, data.tokens.accessToken, data._id);

    yield put(
      setUser({
        birthdate: data.birthDate && data.birthDate,
        email: data.email && data.email,
        gender: data.gender && data.gender,
        nickname: data.nickName && data.nickName,
        phoneNumber: data.phoneNumber && data.phoneNumber,
        sexualOrientation: data.sexualOrientation && data.sexualOrientation,
        shownGender: data.shownGender && data.shownGender,
        images: data?.images.map((image) => {
          return {
            ...image,
            imagePath: getImagePath(image),
          };
        }),
        avatar: data.avatar,
        phoneVerified: data.phoneVerified && data.phoneVerified,
        id: data._id && data._id,
      })
    );
    yield put(loginUserSuccess());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    } else {
      yield put(setAuthError('something went wrong'));
    }
  }
}

function* refreshRequestWorker() {
  try {
    const response: AxiosResponse<RefreshResponse> = yield call(refreshRequest);
    const data = response.data;

    yield call(saveTokens, data.tokens.refreshToken, data.tokens.accessToken);

    yield put(loginUserSuccess());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
    yield put(logoutUser());
  }
}

export function* logInRequestSaga() {
  yield takeLatest(LOGIN_USER, logInRequestWorker);
  yield takeLatest(REFRESH, refreshRequestWorker);
}
