import { LOGIN_USER } from '@shared/constants/actions';
import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { call, put, takeLatest } from 'redux-saga/effects';
import { signInRequest } from 'src/api/signIn';
import { loginUserSuccess } from 'src/store/slices/authSlice';
import { setAuthError } from 'src/store/slices/errorsSlice';
import { Action, LoginUser } from 'src/types/actions/actions.types';
import { SignInResponse } from 'src/types/api/signIn.types';

async function saveTokens(refresh: string, access: string, userId: string) {
  await SecureStore.setItemAsync('refresh', refresh);
  await SecureStore.setItemAsync('userId', userId);
  await SecureStore.setItemAsync('access', access);
}

function* logInRequestWorker(action: Action<LoginUser>) {
  action.payload.phoneNumber = action.payload.phoneNumber.replace(/[^\d+]/g, '');
  try {
    const response: AxiosResponse<SignInResponse> = yield call(signInRequest, action.payload);
    const data = response.data;
    yield call(saveTokens, data.tokens.refresh, data.tokens.access, data.id);
    yield put(loginUserSuccess());
    yield put(setAuthError(null));
  } catch (error) {
    yield put(setAuthError('something went wrong'));
  }
}

export function* logInRequestSaga() {
  yield takeLatest(LOGIN_USER, logInRequestWorker);
}
