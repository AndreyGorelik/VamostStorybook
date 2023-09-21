import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  CONFIRM_REQUEST,
  DELETE_REQUEST,
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
  pendingLoading: boolean;
  deletedLoading: boolean;
  allLoading: boolean;
  error: string | null;
  deletedRequestsError: string | null;
  pendingRequestsError: string | null;
  allRequestsError: string | null;
  confirmPostLoading: boolean;
  cancelPostLoading: boolean;
}

const initialState: PostsState = {
  pendingRequests: [],
  deletedRequests: [],
  allRequests: [],
  post: null,
  isPostLoading: false,
  updateLoading: false,
  pendingLoading: false,
  deletedLoading: false,
  allLoading: false,
  error: null,
  deletedRequestsError: null,
  pendingRequestsError: null,
  allRequestsError: null,
  confirmPostLoading: false,
  cancelPostLoading: false,
};

const postsSlice = createSlice({
  initialState,
  name: 'post',
  reducers: {
    setPost(state, action: PayloadAction<PostInfo>) {
      state.post = action.payload;
    },
    resetPost() {
      return { ...initialState };
    },
    setPostError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
    },
    setPendingRequestsError(state, action: PayloadAction<string | null>) {
      state.pendingRequestsError = action.payload;
    },
    setAllRequestsError(state, action: PayloadAction<string | null>) {
      state.allRequestsError = action.payload;
    },
    setDeletedRequestsError(state, action: PayloadAction<string | null>) {
      state.deletedRequestsError = action.payload;
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
    setPendingLoading(state, action: PayloadAction<boolean>) {
      state.pendingLoading = action.payload;
    },
    setDeletedLoading(state, action: PayloadAction<boolean>) {
      state.deletedLoading = action.payload;
    },
    setAllLoading(state, action: PayloadAction<boolean>) {
      state.allLoading = action.payload;
    },
    confirmRequest(state, action: PayloadAction<PostRequest>) {
      state.pendingRequests = [
        ...state.pendingRequests.filter((request) => request.id !== action.payload.id),
      ];
      state.deletedRequests = [
        ...state.pendingRequests.filter((request) => request.id !== action.payload.id),
      ];
      state.allRequests = [...state.allRequests, action.payload];
    },
    deleteRequest(state, action: PayloadAction<PostRequest>) {
      state.pendingRequests = [
        ...state.pendingRequests.filter((request) => request.id !== action.payload.id),
      ];
      state.allRequests = [
        ...state.pendingRequests.filter((request) => request.id !== action.payload.id),
      ];
      state.deletedRequests = [...state.deletedRequests, action.payload];
    },
  },
});

export const getPost = createAction<GetPost>(GET_POST);
export const updatePostStatus = createAction<UpdatePostStatus>(UPDATE_POST_STATUS);
export const getAllRequests = createAction<GetRequests>(GET_ALL_REQUESTS);
export const getPendingRequests = createAction<GetRequests>(GET_PENDING_REQUESTS);
export const getDeletedRequests = createAction<GetRequests>(GET_DELETED_REQUESTS);
export const confirmRequestAction = createAction<PostRequest>(CONFIRM_REQUEST);
export const deleteRequestAction = createAction<PostRequest>(DELETE_REQUEST);

export const {
  setPost,
  setIsUpdateLoading,
  setIsPostLoading,
  setPendingRequests,
  setDeletedRequests,
  setAllRequests,
  setPendingLoading,
  setAllLoading,
  setDeletedLoading,
  confirmRequest,
  deleteRequest,
  resetPost,
  setPostError,
  setPendingRequestsError,
  setAllRequestsError,
  setDeletedRequestsError,
} = postsSlice.actions;

export default postsSlice.reducer;
