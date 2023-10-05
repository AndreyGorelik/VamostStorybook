import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_POST, SEND_REQUEST, UPDATE_POST_STATUS } from '@shared/constants/actions';
import { PostResponse, SendRequest } from 'src/types/actions/actions.types';
import { GetPost, UpdatePostStatus } from 'src/types/api/getPosts';

export type PostInfo = {
  info: PostResponse | null;
  isUsersPost: boolean;
} | null;

export interface PostsState {
  post: PostInfo;
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
export const sendRequest = createAction<SendRequest>(SEND_REQUEST);

export const { setPost, resetPost, setPostError, getPost } = postsSlice.actions;

export default postsSlice.reducer;
