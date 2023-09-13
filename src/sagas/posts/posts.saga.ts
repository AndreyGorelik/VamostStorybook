import {
  GET_CANCELED_POSTS,
  GET_PAST_POSTS,
  GET_POSTS,
  GET_POSTS_BY_USER,
  GET_UPCOMING_POSTS,
} from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCanceledPostsRequest } from 'src/api/posts/getCanceledPosts';
import { getPastPostsRequest } from 'src/api/posts/getPastPosts';
import { getPostsRequest } from 'src/api/posts/getPosts';
import { getPostsByUserRequest } from 'src/api/posts/getPostsByUser';
import { getUpcomingPostsRequest } from 'src/api/posts/getUpcomingPosts';
import { setPostsError } from 'src/store/slices/errorsSlice';
import {
  setCanceledPosts,
  setIsLoading,
  setPastPosts,
  setPosts,
  setUpcomingPosts,
} from 'src/store/slices/postsSlice';
import { Action, PostResponse } from 'src/types/actions/actions.types';
import { GetPosts } from 'src/types/api/getPosts';

export function* getPostsWorker(action: Action<GetPosts>) {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getPostsRequest, action.payload);

    yield put(setPosts(response.data));
    yield put(setIsLoading(false));
    yield put(setPostsError(null));
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
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getPostsByUserRequest);
    yield put(setPosts(response.data));
    yield put(setIsLoading(false));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}

export function* getCanceledPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getCanceledPostsRequest);
    yield put(setCanceledPosts(response.data));
    yield put(setIsLoading(false));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}

export function* getUpcomingPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getUpcomingPostsRequest);
    yield put(setUpcomingPosts(response.data));
    yield put(setIsLoading(false));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}
export function* getPastPostsWorker() {
  try {
    yield put(setIsLoading(true));
    const response: AxiosResponse<PostResponse[]> = yield call(getPastPostsRequest);
    yield put(setPastPosts(response.data));
    yield put(setIsLoading(false));
    yield put(setPostsError(null));
  } catch (error) {
    if (Axios.isAxiosError(error)) {
      if (error.response && error.response.data && error.response.data.message) {
        yield put(setPostsError(error.response.data));
      }
    }
  }
}

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POSTS_BY_USER, getPostsByUserWorker);
  yield takeLatest(GET_UPCOMING_POSTS, getUpcomingPostsWorker);
  yield takeLatest(GET_PAST_POSTS, getPastPostsWorker);
  yield takeLatest(GET_CANCELED_POSTS, getCanceledPostsWorker);
}
