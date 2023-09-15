import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import {
  GET_ALL_REQUESTS,
  GET_CANCELED_POSTS,
  GET_DELETED_REQUESTS,
  GET_PAST_POSTS,
  GET_PENDING_REQUESTS,
  GET_POST,
  GET_POSTS,
  GET_POSTS_BY_USER,
  GET_UPCOMING_POSTS,
  UPDATE_POST_STATUS,
} from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCanceledPostsRequest } from 'src/api/posts/getCanceledPosts';
import { getPastPostsRequest } from 'src/api/posts/getPastPosts';
import { getPostRequest } from 'src/api/posts/getPost';
import { getPostRequestsRequest } from 'src/api/posts/getPostRequests';
import { getPostsRequest } from 'src/api/posts/getPosts';
import { getPostsByUserRequest } from 'src/api/posts/getPostsByUser';
import { getUpcomingPostsRequest } from 'src/api/posts/getUpcomingPosts';
import { setPostStatusRequest } from 'src/api/posts/setPostStatus';
import { setPostsError, setRequestError } from 'src/store/slices/errorsSlice';
import {
  setPost,
  setIsUpdateLoading,
  getPost,
  setIsPostLoading,
  setPendingRequests,
  setDeletedRequests,
  setAllRequests,
  setIsRequestLoading,
} from 'src/store/slices/postSlice';
import {
  PostInfo,
  setCanceledPosts,
  setIsLoading,
  setPastPosts,
  setPosts,
  setUpcomingPosts,
} from 'src/store/slices/postsSlice';
import { Action, PostResponse } from 'src/types/actions/actions.types';
import {
  GetPost,
  GetPosts,
  GetRequests,
  PostRequest,
  UpdatePostStatus,
} from 'src/types/api/getPosts';

function* workerDecorator<T, P>(
  action: Action<P>,
  request: (data: P) => Promise<AxiosResponse<T>>,
  setLoading: ActionCreatorWithPayload<boolean, string>,
  setResponse: ActionCreatorWithPayload<T, string>,
  setError: ActionCreatorWithPayload<string | null, string>
) {
  try {
    yield put(setLoading(true));
    if (!('payload' in action)) return;
    const response: AxiosResponse<T> = yield call(request, action.payload);

    yield put(setResponse(response.data));
    yield put(setError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setError(error.response.data.message));
      }
    }
  } finally {
    yield put(setLoading(false));
  }
}

export function* getPostsWorker(action: Action<GetPosts>) {
  yield workerDecorator<PostResponse[], GetPosts>(
    action,
    getPostsRequest,
    setIsLoading,
    setPosts,
    setPostsError
  );
}

export function* getPostWorker(action: Action<GetPost>) {
  yield workerDecorator<PostInfo, GetPost>(
    action,
    getPostRequest,
    setIsPostLoading,
    setPost,
    setPostsError
  );
}

export function* getPostsByUserWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getPostsByUserRequest);
    yield put(setPosts(response.data));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* getCanceledPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getCanceledPostsRequest);
    yield put(setCanceledPosts(response.data));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* getUpcomingPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getUpcomingPostsRequest);
    yield put(setUpcomingPosts(response.data));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}
export function* getPastPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getPastPostsRequest);
    yield put(setPastPosts(response.data));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  } finally {
    yield put(setIsLoading(false));
  }
}

export function* updatePostStatusWorker(action: Action<UpdatePostStatus>) {
  try {
    yield put(setIsUpdateLoading(true));
    yield call(setPostStatusRequest, action.payload);
    yield put(getPost({ id: action.payload.id }));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  } finally {
    yield put(setIsUpdateLoading(false));
  }
}

export function* getPendingRequestsWorker(action: Action<GetRequests>) {
  yield workerDecorator<PostRequest[], GetRequests>(
    action,
    getPostRequestsRequest,
    setIsRequestLoading,
    setPendingRequests,
    setRequestError
  );
}

export function* getDeletedRequestsWorker(action: Action<GetRequests>) {
  yield workerDecorator<PostRequest[], GetRequests>(
    action,
    getPostRequestsRequest,
    setIsRequestLoading,
    setDeletedRequests,
    setRequestError
  );
}

export function* getAllRequestsWorker(action: Action<GetRequests>) {
  yield workerDecorator<PostRequest[], GetRequests>(
    action,
    getPostRequestsRequest,
    setIsRequestLoading,
    setAllRequests,
    setRequestError
  );
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker);
  yield takeLatest(GET_POSTS_BY_USER, getPostsByUserWorker);
  yield takeLatest(GET_UPCOMING_POSTS, getUpcomingPostsWorker);
  yield takeLatest(GET_PAST_POSTS, getPastPostsWorker);
  yield takeLatest(GET_CANCELED_POSTS, getCanceledPostsWorker);
  yield takeLatest(UPDATE_POST_STATUS, updatePostStatusWorker);
  yield takeLatest(GET_PENDING_REQUESTS, getPendingRequestsWorker);
  yield takeLatest(GET_DELETED_REQUESTS, getDeletedRequestsWorker);
  yield takeLatest(GET_ALL_REQUESTS, getAllRequestsWorker);
}
