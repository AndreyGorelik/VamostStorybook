import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { createPostRequest } from 'src/api/postCreate/createPost';
import { getFullPackageRequest } from 'src/api/postCreate/getFullPackage';
import { getPackagesRequest } from 'src/api/postCreate/getPackages';
import { getVenuesRequest } from 'src/api/postCreate/getVenues';
import {
  CREATE_POST,
  GET_FULL_PACKAGE,
  GET_PACKAGES,
  GET_VENUES,
  setLoading,
  setPostCreateError,
  setPostFullPackage,
  setPostPackages,
  setPostVenues,
} from 'src/store/slices/postCreateSlice';
import {
  Action,
  CreatePostData,
  FullPackage,
  Package,
  Place,
  PostGetPackages,
} from 'src/types/actions/actions.types';

function* postCreatePostWorker(action: Action<CreatePostData>) {
  const { payload } = action;
  try {
    yield put(setLoading(true));
    yield call(createPostRequest, payload);
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setPostCreateError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* postGetVenues(action: Action<string>) {
  const { payload } = action;

  try {
    yield put(setLoading(true));
    const request: AxiosResponse<Place[]> = yield call(getVenuesRequest, payload);
    yield put(setPostVenues(request.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setPostCreateError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* postGetPackages(action: Action<PostGetPackages>) {
  const { payload } = action;

  try {
    yield put(setLoading(true));
    const request: AxiosResponse<Package> = yield call(getPackagesRequest, payload);

    yield put(setPostPackages(request.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setPostCreateError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setLoading(false));
  }
}

function* postGetFullPackage(action: Action<string>) {
  const { payload } = action;

  try {
    yield put(setLoading(true));
    const request: AxiosResponse<FullPackage> = yield call(getFullPackageRequest, payload);
    yield put(setPostFullPackage(request.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.data && error.response.data.message) {
          yield put(setPostCreateError(error.response.data.message));
        }
      }
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* postCreateSaga() {
  yield takeLatest(CREATE_POST, postCreatePostWorker);
  yield takeLatest(GET_VENUES, postGetVenues);
  yield takeLatest(GET_PACKAGES, postGetPackages);
  yield takeLatest(GET_FULL_PACKAGE, postGetFullPackage);
}
