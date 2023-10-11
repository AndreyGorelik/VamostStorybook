import { CONFIRM_REQUEST, DELETE_REQUEST, GET_ALL_REQUESTS } from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, fork, put, takeLatest } from 'redux-saga/effects';
import { confirmRequest } from 'src/api/posts/confirmRequest';
import { getPostRequestsRequest } from 'src/api/posts/getPostRequests';
import { rejectRequest } from 'src/api/posts/rejectRequest';
import {
  setApproveRequestsError,
  setApproveRequests,
} from 'src/store/slices/post/requests/approveRequests.slice';
import {
  setDeletedRequests,
  setDeletedRequestsError,
} from 'src/store/slices/post/requests/deletedRequests.slice';
import {
  setPendingRequests,
  setPendingRequestsError,
} from 'src/store/slices/post/requests/pendingRequests.slice';
import { Action } from 'src/types/actions/actions.types';
import { GetRequests, PostRequest, TakeDecision } from 'src/types/api/getPosts';

export function* getPendingRequestsWorker(action: Action<GetRequests>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(getPostRequestsRequest, {
      ...action.payload,
      requestStatus: 'New',
    });
    yield put(setPendingRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPendingRequestsError(error.response.data));
      }
    }
  }
}

export function* getDeletedRequestsWorker(action: Action<GetRequests>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(getPostRequestsRequest, {
      ...action.payload,
      requestStatus: 'Rejected',
    });
    yield put(setDeletedRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setDeletedRequestsError(error.response.data));
      }
    }
  }
}

export function* getApproveRequestsWorker(action: Action<GetRequests>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(getPostRequestsRequest, {
      ...action.payload,
      requestStatus: 'Approve',
    });
    yield put(setApproveRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setApproveRequestsError(error.response.data));
      }
    }
  }
}

export function* confirmRequestWorker(action: Action<TakeDecision>) {
  yield call(confirmRequest, action.payload);
}

export function* deleteRequestWorker(action: Action<TakeDecision>) {
  yield call(rejectRequest, action.payload);
}

export function* requestsSaga() {
  yield takeLatest(GET_ALL_REQUESTS, function* (action: Action<GetRequests>) {
    yield fork(getPendingRequestsWorker, action);
    yield fork(getApproveRequestsWorker, action);
    yield fork(getDeletedRequestsWorker, action);
  });
  yield takeLatest(CONFIRM_REQUEST, confirmRequestWorker);
  yield takeLatest(DELETE_REQUEST, deleteRequestWorker);
}
