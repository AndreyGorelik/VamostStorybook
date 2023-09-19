import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getProfileRequest } from 'src/api/getProfile';
import {
  GET_PROFILE,
  Profile,
  setError,
  setProfile,
  setStartLoading,
} from 'src/store/slices/profileSlice';
import { Action } from 'src/types/actions/actions.types';

function* getProfileWorker(action: Action<string>) {
  try {
    yield put(setStartLoading());
    const response: AxiosResponse<Profile> = yield call(getProfileRequest, action.payload);
    yield put(setProfile(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data) {
          yield put(setError(error.response.data.message));
        }
      }
    }
  }
}

export function* profileSaga() {
  yield takeLatest(GET_PROFILE, getProfileWorker);
}
