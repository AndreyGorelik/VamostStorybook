import {
  REGISTER_USER,
  CONFIRM_CODE,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_ATTRIBUTES,
  REGISTER_PHOTO,
  REGISTER_BIRTHDATE,
} from '@shared/constants/actions';
import { saveTokens } from '@shared/utils/saveTokens';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { confirmCodeRequest } from 'src/api/auth/confirmCode';
import { registerAttributesRequest } from 'src/api/auth/registerAttributes';
import { registerBirthDateRequest } from 'src/api/auth/registerBirthDate';
import { registerEmailRequest } from 'src/api/auth/registerEmail';
import { registerNicknameRequest } from 'src/api/auth/registerNickname';
import { registerPhotoRequest } from 'src/api/auth/registerPhoto';
import { signUpRequest } from 'src/api/auth/signUp';
import { setAuthError, setNextStep, setSignUpFinished } from 'src/store/slices/auth.slice';
import {
  setBirthDate,
  setEmail,
  setNickname,
  setPhoneNumber,
  setShownGender,
} from 'src/store/slices/user.slice';
import {
  Action,
  ConfirmCode,
  RegisterAttributes,
  RegisterBirthDate,
  RegisterEmail,
  RegisterNickname,
  RegisterUser,
} from 'src/types/actions/actions.types';
import { ConfirmCodeResponse } from 'src/types/api/confirmCode.types';

function* phoneAndPasswordRequestWorker(action: Action<RegisterUser>) {
  const { payload } = action;
  payload.phoneNumber = payload.phoneNumber.replace(/[^\d+]/g, '');

  try {
    yield call(signUpRequest, payload);

    yield put(setPhoneNumber(payload.phoneNumber));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* confirmCodeWorker(action: Action<ConfirmCode>) {
  const { payload } = action;
  try {
    const request: AxiosResponse<ConfirmCodeResponse> = yield call(confirmCodeRequest, payload);

    const { accessToken, refreshToken } = request.data.tokens;
    const userId = request.data._id;
    yield call(saveTokens, refreshToken, accessToken, userId);

    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* registerEmailWorker(action: Action<RegisterEmail>) {
  const { payload } = action;

  try {
    yield call(registerEmailRequest, {
      data: payload,
    });

    yield put(setEmail(payload.email));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* registerNicknameWorker(action: Action<RegisterNickname>) {
  const { payload } = action;

  try {
    yield call(registerNicknameRequest, { data: payload });

    yield put(setNickname(payload.nickName));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* registerBirthDateWorker(action: Action<RegisterBirthDate>) {
  const { payload } = action;

  try {
    yield call(registerBirthDateRequest, { data: payload });

    yield put(setBirthDate(payload.birthDate));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* registerAttributesWorker(action: Action<RegisterAttributes>) {
  const { payload } = action;
  try {
    yield call(registerAttributesRequest, { data: payload });

    yield put(setShownGender(payload.shownGender));
    yield put(setNextStep());
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

function* registerPhotoWorker(action: Action<string>) {
  const { payload } = action;

  try {
    for (const image of JSON.parse(payload)) {
      const formData = new FormData();
      formData.append('imageData', image as any);
      yield call(registerPhotoRequest, { data: formData });
    }
    yield put(setSignUpFinished(true));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setAuthError(error.response.data.message));
        }
      }
    }
  }
}

export function* signUpSaga() {
  yield takeLatest(REGISTER_USER, phoneAndPasswordRequestWorker);
  yield takeLatest(CONFIRM_CODE, confirmCodeWorker);
  yield takeLatest(REGISTER_EMAIL, registerEmailWorker);
  yield takeLatest(REGISTER_NICKNAME, registerNicknameWorker);
  yield takeLatest(REGISTER_BIRTHDATE, registerBirthDateWorker);
  yield takeLatest(REGISTER_ATTRIBUTES, registerAttributesWorker);
  yield takeLatest(REGISTER_PHOTO, registerPhotoWorker);
}
