import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  setConfirmCodeError,
  setEmailError,
  setNicknameError,
  setPhoneNumberError,
} from 'src/store/slices/errorsSlice';
import {
  setEmail,
  setNickname,
  setPhoneNumber,
  setShownGender,
  setTokens,
} from 'src/store/slices/userSlice';

import {
  CONFIRM_CODE,
  REGISTER_ATTRIBUTES,
  REGISTER_EMAIL,
  REGISTER_NICKNAME,
  REGISTER_USER,
  setNextStep,
} from '../../store/slices/authSlice';

const signUp = async (payload) => {
  payload.phoneNumber = payload.phoneNumber.replace(/[^\d+]/g, '');
  const request = await fetch(
    'https://kthuqqbzd2.execute-api.us-east-1.amazonaws.com/dev/auth/signup',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    }
  );
  return request;
};

function* phoneAndPasswordRequestWorker(action) {
  const { payload } = action;

  const request = yield call(signUp, payload);

  if (request.status == 201) {
    yield put(setPhoneNumberError(null));
    yield put(setPhoneNumber(payload.phoneNumber));
    yield put(setNextStep(2));
  } else {
    const answer = yield request.json();
    yield put(setPhoneNumberError(answer));
  }
}

function* confirmCodeWorker(action) {
  const { payload } = action;
  const request = yield fetch(
    'https://kthuqqbzd2.execute-api.us-east-1.amazonaws.com/dev/auth/signup/confirm',
    {
      method: 'POST',
      body: JSON.stringify(payload),
    }
  );

  if (request.status === 200) {
    const answer = yield request.json();
    yield put(setConfirmCodeError(null));
    yield put(setTokens(answer.tokens));
    yield put(setNextStep(3));
  } else {
    const requestJson = yield request.json();
    yield put(setConfirmCodeError(requestJson));
  }
}

function* registerEmailWorker(action) {
  const { payload } = action;

  const token = yield select((state) => state.userSlice.tokens.access);
  const request = yield fetch(
    'https://kthuqqbzd2.execute-api.us-east-1.amazonaws.com/dev/auth/signup/email',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (request.status === 200) {
    yield put(setEmail(payload.email));
    yield put(setEmailError(null));
    yield put(setNextStep(4));
  } else {
    const requestJson = yield request.json();
    yield put(setEmailError(requestJson));
  }
}

function* registerNicknameWorker(action) {
  const { payload } = action;

  const token = yield select((state) => state.userSlice.tokens.access);
  const request = yield fetch(
    'https://kthuqqbzd2.execute-api.us-east-1.amazonaws.com/dev/auth/signup/nickname',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (request.status === 200) {
    yield put(setNickname(payload.nickname));
    yield put(setNicknameError(null));
    yield put(setNextStep(5));
  } else {
    const requestJson = yield request.json();
    yield put(setNicknameError(requestJson));
  }
}

function* registerAttributes(action) {
  const { payload } = action;

  const token = yield select((state) => state.userSlice.tokens.access);
  console.log('>>>', token);
  
  const request = yield fetch(
    'https://kthuqqbzd2.execute-api.us-east-1.amazonaws.com/dev/auth/signup/user-attributes',
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    }
  );

  if (request.status === 200) {
    yield put(setShownGender(payload.shownGender));
    yield put(setNextStep(9));
  } else {
    const requestJson = yield request.json();
    console.log(requestJson);
  }
}

export function* signUpSaga() {
  yield takeLatest(REGISTER_USER, phoneAndPasswordRequestWorker);
  yield takeLatest(CONFIRM_CODE, confirmCodeWorker);
  yield takeLatest(REGISTER_EMAIL, registerEmailWorker);
  yield takeLatest(REGISTER_NICKNAME, registerNicknameWorker);
  yield takeLatest(REGISTER_ATTRIBUTES, registerAttributes);
}
