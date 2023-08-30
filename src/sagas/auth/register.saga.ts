import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  REGISTER_USER,
  CONFIRM_CODE,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_ATTRIBUTES,
  REGISTER_PHOTO,
} from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { confirmCodeRequest } from 'src/api/confirmCode';
import { registerAttributesRequest } from 'src/api/registerAttributes';
import { registerEmailRequest } from 'src/api/registerEmail';
import { registerNicknameRequest } from 'src/api/registerNickname';
import { registerPhotoRequest } from 'src/api/registerPhoto';
import { signUpRequest } from 'src/api/signUp';
import { setIsLoading, setNextStep } from 'src/store/slices/authSlice';
import {
  setAttributesError,
  setConfirmCodeError,
  setEmailError,
  setNicknameError,
  setPhoneNumberError,
  setPhotosError,
} from 'src/store/slices/errorsSlice';
import { setEmail, setNickname, setPhoneNumber, setShownGender } from 'src/store/slices/userSlice';
import {
  Action,
  ConfirmCode,
  RegisterAttributes,
  RegisterEmail,
  RegisterNickname,
  RegisterPhoto,
  RegisterUser,
} from 'src/types/actions/actions.types';
import { ConfirmCodeResponse } from 'src/types/api/confirmCode.types';

async function saveTokens(refresh: string, access: string, userId: string) {
  await AsyncStorage.setItem('refresh', refresh);
  await AsyncStorage.setItem('access', access);
  await AsyncStorage.setItem('userId', userId);
}

async function getAccess() {
  return await AsyncStorage.getItem('access');
}

function* phoneAndPasswordRequestWorker(action: Action<RegisterUser>) {
  const { payload } = action;

  try {
    yield put(setIsLoading(true));

    yield call(signUpRequest, payload);

    yield put(setPhoneNumberError(null));
    yield put(setPhoneNumber(payload.phoneNumber));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setPhoneNumberError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

function* confirmCodeWorker(action: Action<ConfirmCode>) {
  const { payload } = action;
  try {
    yield put(setIsLoading(true));

    const request: AxiosResponse<ConfirmCodeResponse> = yield call(confirmCodeRequest, payload);

    yield put(setConfirmCodeError(null));
    const { access, refresh } = request.data.tokens;
    const userId = request.data.userId;
    yield call(saveTokens, refresh, access, userId);
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setConfirmCodeError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

function* registerEmailWorker(action: Action<RegisterEmail>) {
  const { payload } = action;

  const token: string = yield call(getAccess);
  try {
    yield put(setIsLoading(true));

    yield call(registerEmailRequest, {
      data: payload,
      token,
    });

    yield put(setEmail(payload.email));
    yield put(setEmailError(null));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setEmailError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

function* registerNicknameWorker(action: Action<RegisterNickname>) {
  const { payload } = action;

  const token: string = yield call(getAccess);
  try {
    yield put(setIsLoading(true));
    yield call(registerNicknameRequest, { data: payload, token });

    yield put(setNickname(payload.nickName));
    yield put(setNicknameError(null));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setNicknameError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

function* registerAttributesWorker(action: Action<RegisterAttributes>) {
  const { payload } = action;

  const token: string = yield call(getAccess);

  try {
    yield put(setIsLoading(true));

    yield call(registerAttributesRequest, { data: payload, token });

    yield put(setShownGender(payload.shownGender));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setAttributesError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

function* registerPhotoWorker(action: Action<RegisterPhoto>) {
  const { payload } = action;

  const token: string = yield call(getAccess);
  try {
    yield put(setIsLoading(true));

    yield call(registerPhotoRequest, { data: payload, token });
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data || error.response.data.message) {
          yield put(setPhotosError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* signUpSaga() {
  yield takeLatest(REGISTER_USER, phoneAndPasswordRequestWorker);
  yield takeLatest(CONFIRM_CODE, confirmCodeWorker);
  yield takeLatest(REGISTER_EMAIL, registerEmailWorker);
  yield takeLatest(REGISTER_NICKNAME, registerNicknameWorker);
  yield takeLatest(REGISTER_ATTRIBUTES, registerAttributesWorker);
  yield takeLatest(REGISTER_PHOTO, registerPhotoWorker);
}
