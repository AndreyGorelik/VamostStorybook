import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_PAST_POSTS } from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';

export interface PastPostsState {
  pastPosts: PostResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PastPostsState = {
  pastPosts: [],
  isLoading: false,
  error: null,
};

const pastPostsSlice = createSlice({
  initialState,
  name: 'pastPosts',
  reducers: {
    getPastPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    setPastPosts(state, action: PayloadAction<PostResponse[]>) {
      state.pastPosts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setPastPostsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getPastPostsAction = createAction(GET_PAST_POSTS);

export const { setPastPosts, setPastPostsError, getPastPosts } = pastPostsSlice.actions;

export default pastPostsSlice.reducer;
