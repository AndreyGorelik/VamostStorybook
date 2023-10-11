import {
  GET_CANCELLED_POSTS,
  GET_PAST_POSTS,
  GET_POST,
  GET_POSTS,
  GET_UPCOMING_POSTS,
  UPDATE_POST_STATUS,
} from '@shared/constants/actions';
import Axios, { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import { getCanceledPostsRequest } from 'src/api/posts/getCanceledPosts';
import { getPastPostsRequest } from 'src/api/posts/getPastPosts';
import { getPostRequest } from 'src/api/posts/getPost';
import { getPostsRequest } from 'src/api/posts/getPosts';
import { getPostsByUserRequest } from 'src/api/posts/getPostsByUser';
import { getUpcomingPostsRequest } from 'src/api/posts/getUpcomingPosts';
import { setPostStatusRequest } from 'src/api/posts/setPostStatus';
import {
  setPost,
  PostInfo,
  setPostError,
  getPostAction,
  getAllRequests,
} from 'src/store/slices/post/post.slice';
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
import { GetPost, GetPosts, UpdatePostStatus } from 'src/types/api/getPosts';

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
    yield put(
      getAllRequests({
        id: response.data.info._id,
      })
    );
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

export function* postsSaga() {
  yield takeLatest(GET_POSTS, getPostsWorker);
  yield takeLatest(GET_POST, getPostWorker);
  yield takeLatest(GET_UPCOMING_POSTS, getUpcomingPostsWorker);
  yield takeLatest(GET_PAST_POSTS, getPastPostsWorker);
  yield takeLatest(GET_CANCELLED_POSTS, getCanceledPostsWorker);
  yield takeLatest(UPDATE_POST_STATUS, updatePostStatusWorker);
}
