import {
  REGISTER_USER,
  CONFIRM_CODE,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_ATTRIBUTES,
  REGISTER_PHOTO,
} from '@shared/constants/actions';
import { saveTokens } from '@shared/utils/saveTokens';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { confirmCodeRequest } from 'src/api/confirmCode';
import { registerAttributesRequest } from 'src/api/registerAttributes';
import { registerEmailRequest } from 'src/api/registerEmail';
import { registerNicknameRequest } from 'src/api/registerNickname';
import { registerPhotoRequest } from 'src/api/registerPhoto';
import { signUpRequest } from 'src/api/signUp';
import { setAuthError, setNextStep, setSignUpFinished } from 'src/store/slices/auth.slice';
import { setEmail, setNickname, setPhoneNumber, setShownGender } from 'src/store/slices/user.slice';
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
        if (error.response.data || error.response.data.message) {
          yield put(setAuthError(error.response.data || error.response.data.message));
        }
      }
    }
  }
}

function* confirmCodeWorker(action: Action<ConfirmCode>) {
  const { payload } = action;
  try {
    const request: AxiosResponse<ConfirmCodeResponse> = yield call(confirmCodeRequest, payload);

    const { access, refresh } = request.data.tokens;
    const userId = request.data.userId;
    yield call(saveTokens, refresh, access, userId);

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
        if (error.response.data || error.response.data.message) {
          yield put(setAuthError(error.response.data || error.response.data.message));
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
        if (error.response.data || error.response.data.message) {
          yield put(setAuthError(error.response.data || error.response.data.message));
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
        if (error.response.data || error.response.data.message) {
          yield put(setAuthError(error.response.data || error.response.data.message));
        }
      }
    }
  }
}

function* registerPhotoWorker(action: Action<RegisterPhoto[]>) {
  const { payload } = action;

  try {
    for (const image of payload) {
      yield call(registerPhotoRequest, { data: image });
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
  yield takeLatest(REGISTER_ATTRIBUTES, registerAttributesWorker);
  yield takeLatest(REGISTER_PHOTO, registerPhotoWorker);
}
