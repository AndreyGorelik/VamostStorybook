import { LOGIN_USER, REFRESH } from '@shared/constants/actions';
import { saveTokens } from '@shared/utils/saveTokens';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { refreshRequest } from 'src/api/refresh';
import { signInRequest } from 'src/api/signIn';
import { loginUserSuccess, logoutUser, setAuthError } from 'src/store/slices/auth.slice';
import { setUser } from 'src/store/slices/user.slice';
import { Action, LoginUser } from 'src/types/actions/actions.types';
import { RefreshResponse } from 'src/types/api/refresh.types';
import { SignInResponse } from 'src/types/api/signIn.types';

function* logInRequestWorker(action: Action<LoginUser>) {
  try {
    const response: AxiosResponse<SignInResponse> = yield call(signInRequest, action.payload);
    const data = response.data;

    yield call(saveTokens, data.tokens.refresh, data.tokens.access, data.id);
    yield put(
      setUser({
        birthdate: data.birthdate && data.birthdate,
        email: data.email && data.email,
        gender: data.gender && JSON.parse(data.gender),
        nickname: data.nickName && data.nickName,
        phoneNumber: data.phoneNumber && data.phoneNumber,
        sexualOrientation: data.sexualOrientation && JSON.parse(data.sexualOrientation),
        shownGender: data.shownGender && data.shownGender,
        images: data.images && data.images,
        avatar: data.avatar && data.avatar,
        phoneVerified: data.phoneVerified && data.phoneVerified,
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

    yield call(saveTokens, data.tokens.refresh, data.tokens.access);

    yield put(loginUserSuccess());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data) {
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
