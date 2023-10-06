import {
  CONFIRM_REQUEST,
  DELETE_REQUEST,
  GET_ALL_REQUESTS,
  GET_CANCELLED_POSTS,
  GET_DELETED_REQUESTS,
  GET_PAST_POSTS,
  GET_PENDING_REQUESTS,
  GET_POST,
  GET_POSTS,
  GET_UPCOMING_POSTS,
  UPDATE_POST_STATUS,
} from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { confirmRequest } from 'src/api/posts/confirmRequest';
import { getCanceledPostsRequest } from 'src/api/posts/getCanceledPosts';
import { getPastPostsRequest } from 'src/api/posts/getPastPosts';
import { getPostRequest } from 'src/api/posts/getPost';
import { getPostRequestsRequest } from 'src/api/posts/getPostRequests';
import { getPostsRequest } from 'src/api/posts/getPosts';
import { getPostsByUserRequest } from 'src/api/posts/getPostsByUser';
import { getUpcomingPostsRequest } from 'src/api/posts/getUpcomingPosts';
import { rejectRequest } from 'src/api/posts/rejectRequest';
import { setPostStatusRequest } from 'src/api/posts/setPostStatus';
import { setPost, PostInfo, setPostError, getPostAction } from 'src/store/slices/post/post.slice';
import {
  setAllRequests,
  setAllRequestsError,
} from 'src/store/slices/post/requests/allRequests.slice';
import {
  setDeletedRequests,
  setDeletedRequestsError,
} from 'src/store/slices/post/requests/deletedRequests.slice';
import {
  setPendingRequests,
  setPendingRequestsError,
} from 'src/store/slices/post/requests/pendingRequests.slice';
import {
  setCancelledPosts,
  setCancelledPostsError,
} from 'src/store/slices/posts/cancelledPosts.slice';
import { setPastPosts, setPastPostsError } from 'src/store/slices/posts/pastPosts.slice';
import { setPosts, setPostsError } from 'src/store/slices/posts/posts.slice';
import {
  setUpcomingPosts,
  setUpcomingPostsError,
} from 'src/store/slices/posts/upcomingPosts.slice';
import { Action, PostResponse } from 'src/types/actions/actions.types';
import {
  GetPost,
  GetPosts,
  GetRequests,
  PostRequest,
  TakeDecision,
  UpdatePostStatus,
} from 'src/types/api/getPosts';

export function* getPostsWorker(action: Action<GetPosts>) {
  try {
    const response: AxiosResponse<PostResponse[]> = yield call(getPostsRequest, action.payload);
    yield put(setPosts(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}

export function* getPostsByUserWorker() {
  try {
    const response: AxiosResponse<PostResponse[]> = yield call(getPostsByUserRequest);
    yield put(setPosts(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}

export function* getPostWorker(action: Action<GetPost>) {
  try {
    const response: AxiosResponse<PostInfo> = yield call(getPostRequest, action.payload);

    yield put(setPost(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostError(error.response.data.message));
      }
    }
  }
}

export function* getCanceledPostsWorker() {
  try {
    const response: AxiosResponse<PostResponse[]> = yield call(getCanceledPostsRequest);
    yield put(setCancelledPosts(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setCancelledPostsError(error.response.data));
      }
    }
  }
}

export function* getUpcomingPostsWorker() {
  try {
    const response: AxiosResponse<PostResponse[]> = yield call(getUpcomingPostsRequest);
    yield put(setUpcomingPosts(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setUpcomingPostsError(error.response.data));
      }
    }
  }
}
export function* getPastPostsWorker() {
  try {
    const response: AxiosResponse<PostResponse[]> = yield call(getPastPostsRequest);
    yield put(setPastPosts(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPastPostsError(error.response.data));
      }
    }
  }
}

export function* updatePostStatusWorker(action: Action<UpdatePostStatus>) {
  try {
    yield call(setPostStatusRequest, action.payload);
    yield put(getPostAction({ id: action.payload.id }));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostError(error.response.data));
      }
    }
  }
}

export function* getPendingRequestsWorker(action: Action<GetRequests>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(
      getPostRequestsRequest,
      action.payload
    );
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
    const response: AxiosResponse<PostRequest[]> = yield call(
      getPostRequestsRequest,
      action.payload
    );
    yield put(setDeletedRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setDeletedRequestsError(error.response.data));
      }
    }
  }
}

export function* getAllRequestsWorker(action: Action<GetRequests>) {
  try {
    const response: AxiosResponse<PostRequest[]> = yield call(
      getPostRequestsRequest,
      action.payload
    );
    yield put(setAllRequests(response.data));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setAllRequestsError(error.response.data));
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

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker);
  yield takeLatest(GET_UPCOMING_POSTS, getUpcomingPostsWorker);
  yield takeLatest(GET_PAST_POSTS, getPastPostsWorker);
  yield takeLatest(GET_CANCELLED_POSTS, getCanceledPostsWorker);
  yield takeLatest(UPDATE_POST_STATUS, updatePostStatusWorker);
  yield takeLatest(GET_PENDING_REQUESTS, getPendingRequestsWorker);
  yield takeLatest(GET_DELETED_REQUESTS, getDeletedRequestsWorker);
  yield takeLatest(GET_ALL_REQUESTS, getAllRequestsWorker);
  yield takeLatest(CONFIRM_REQUEST, confirmRequestWorker);
  yield takeLatest(DELETE_REQUEST, deleteRequestWorker);
}
