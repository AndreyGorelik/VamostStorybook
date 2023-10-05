import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_CANCELLED_POSTS } from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';

export interface CancelledPostsState {
  cancelledPosts: PostResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: CancelledPostsState = {
  cancelledPosts: [],
  isLoading: false,
  error: null,
};

const cancelledPostsSlice = createSlice({
  initialState,
  name: 'cancelledPosts',
  reducers: {
    getCancelledPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    setCancelledPosts(state, action: PayloadAction<PostResponse[]>) {
      state.cancelledPosts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setCancelledPostsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getCancelledPostsAction = createAction(GET_CANCELLED_POSTS);

export const { setCancelledPosts, setCancelledPostsError, getCancelledPosts } =
  cancelledPostsSlice.actions;

export default cancelledPostsSlice.reducer;
