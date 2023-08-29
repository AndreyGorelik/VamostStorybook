import { LOGIN_USER } from '@shared/constants/actions';
import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { signInRequest } from 'src/api/signIn';
import { loginUserSuccess } from 'src/store/slices/authSlice';
import { setAuthError } from 'src/store/slices/errorsSlice';
import { Action, LoginUser } from 'src/types/actions/actions.types';
import { SignInResponse } from 'src/types/api/signIn.types';

function* logInRequestWorker(action: Action<LoginUser>) {
  action.payload.phoneNumber = action.payload.phoneNumber.replace(/[^\d+]/g, '');
  try {
    const data: AxiosResponse<SignInResponse> = yield call(signInRequest, action.payload);

    if (data) {
      yield put(loginUserSuccess());
      yield put(setAuthError(null));
    } else {
      yield put(setAuthError('something went wrong'));
    }
  } catch (error) {
    yield put(setAuthError('something went wrong'));
  }
}

export function* logInRequestSaga() {
  yield takeLatest(LOGIN_USER, logInRequestWorker);
}
