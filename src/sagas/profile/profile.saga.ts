import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getProfileRequest } from 'src/api/postCreate/getProfile';
import { Profile, getProfile, setError, setProfile } from 'src/store/slices/profileSlice';
import { Action } from 'src/types/actions/actions.types';

function* getProfileWorker(action: Action<string>) {
  try {
    const response: AxiosResponse<Profile> = yield call(getProfileRequest, action.payload);
    yield put(setProfile(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setError(error.response.data.message));
        }
      }
    }
  }
}

export function* profileSaga() {
  yield takeLatest(getProfile, getProfileWorker);
}
