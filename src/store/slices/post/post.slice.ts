import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  CONFIRM_REQUEST,
  DELETE_REQUEST,
  GET_POST,
  UPDATE_POST_STATUS,
  SEND_REQUEST,
  GET_ALL_REQUESTS,
} from '@shared/constants/actions';
import { PostResponse, SendRequest } from 'src/types/actions/actions.types';
import { GetPost, GetRequests, TakeDecision, UpdatePostStatus } from 'src/types/api/getPosts';

export type PostInfo = {
  info: PostResponse;
  isUsersPost: boolean;
};

export interface PostsState {
  post: PostInfo | null;
  isPostLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  post: null,
  isPostLoading: false,
  error: null,
};

const postsSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    setPost(state, action: PayloadAction<PostInfo>) {
      state.post = action.payload;
      state.error = null;
      state.isPostLoading = false;
    },
    resetPost() {
      return { ...initialState };
    },
    setPostError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isPostLoading = false;
    },
    setIsPostLoading(state, action: PayloadAction<boolean>) {
      state.isPostLoading = action.payload;
    },
    getPost(state) {
      state.isPostLoading = true;
    },
  },
});

export const getPostAction = createAction<GetPost>(GET_POST);
export const updatePostStatus = createAction<UpdatePostStatus>(UPDATE_POST_STATUS);
export const confirmRequest = createAction<TakeDecision>(CONFIRM_REQUEST);
export const deleteRequest = createAction<TakeDecision>(DELETE_REQUEST);
export const sendRequest = createAction<SendRequest>(SEND_REQUEST);
export const getAllRequests = createAction<GetRequests>(GET_ALL_REQUESTS);

export const { setPost, resetPost, setPostError, getPost } = postsSlice.actions;

export default postsSlice.reducer;
