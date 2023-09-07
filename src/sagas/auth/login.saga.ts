import { LOGIN_USER, REFRESH } from '@shared/constants/actions';
import { saveTokens } from '@shared/utils/saveTokens';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { refreshRequest } from 'src/api/refresh';
import { signInRequest } from 'src/api/signIn';
import { loginUserSuccess, logoutUser, setIsLoading } from 'src/store/slices/authSlice';
import { setAuthError } from 'src/store/slices/errorsSlice';
import { setUser } from 'src/store/slices/userSlice';
import { Action, LoginUser } from 'src/types/actions/actions.types';
import { SignInResponse } from 'src/types/api/signIn.types';

function* logInRequestWorker(action: Action<LoginUser>) {
  action.payload.phoneNumber = action.payload.phoneNumber.replace(/[^\d+]/g, '');
  try {
    yield put(setIsLoading(true));
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
      })
    );
    yield put(loginUserSuccess());
    yield put(setAuthError(null));
  } catch (error) {
    yield put(setAuthError('something went wrong'));
  } finally {
    yield put(setIsLoading(false));
  }
}

function* refreshRequestWorker() {
  try {
    yield put(setIsLoading(true));
    yield call(refreshRequest);
    yield put(loginUserSuccess());
  } catch (error) {
    yield put(setAuthError('unauthorized'));
    yield put(logoutUser());
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* logInRequestSaga() {
  yield takeLatest(LOGIN_USER, logInRequestWorker);
  yield takeLatest(REFRESH, refreshRequestWorker);
}
