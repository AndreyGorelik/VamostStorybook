import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  GET_ALL_REQUESTS,
  GET_DELETED_REQUESTS,
  GET_PENDING_REQUESTS,
  GET_POST,
  UPDATE_POST_STATUS,
} from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPost, GetRequests, PostRequest, UpdatePostStatus } from 'src/types/api/getPosts';

export type PostInfo = {
  info: PostResponse | null;
  isUsersPost: boolean;
} | null;

export interface PostsState {
  pendingRequests: PostRequest[];
  deletedRequests: PostRequest[];
  allRequests: PostRequest[];
  post: PostInfo;
  isPostLoading: boolean;
  updateLoading: boolean;
  isRequestLoading: boolean;
}

const initialState: PostsState = {
  pendingRequests: [],
  deletedRequests: [],
  allRequests: [],
  post: null,
  isPostLoading: false,
  updateLoading: false,
  isRequestLoading: false,
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setPost(state, action: PayloadAction<PostInfo>) {
      state.post = action.payload;
    },
    setIsPostLoading(state, action: PayloadAction<boolean>) {
      state.isPostLoading = action.payload;
    },
    setPendingRequests(state, action: PayloadAction<PostRequest[]>) {
      state.pendingRequests = action.payload;
    },
    setDeletedRequests(state, action: PayloadAction<PostRequest[]>) {
      state.deletedRequests = action.payload;
    },
    setAllRequests(state, action: PayloadAction<PostRequest[]>) {
      state.allRequests = action.payload;
    },
    setIsUpdateLoading(state, action: PayloadAction<boolean>) {
      state.updateLoading = action.payload;
    },
    setIsRequestLoading(state, action: PayloadAction<boolean>) {
      state.isRequestLoading = action.payload;
    },
  },
});

export const getPost = createAction<GetPost>(GET_POST);
export const updatePostStatus = createAction<UpdatePostStatus>(UPDATE_POST_STATUS);
export const getAllRequests = createAction<GetRequests>(GET_ALL_REQUESTS);
export const getPendingRequests = createAction<GetRequests>(GET_PENDING_REQUESTS);
export const getDeletedRequests = createAction<GetRequests>(GET_DELETED_REQUESTS);

export const {
  setPost,
  setIsUpdateLoading,
  setIsPostLoading,
  setPendingRequests,
  setDeletedRequests,
  setAllRequests,
  setIsRequestLoading,
} = postsSlice.actions;

export default postsSlice.reducer;
