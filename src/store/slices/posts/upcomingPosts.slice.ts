import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_UPCOMING_POSTS } from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';

export interface UpcomingPostsState {
  upcomingPosts: PostResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: UpcomingPostsState = {
  upcomingPosts: [],
  isLoading: false,
  error: null,
};

const upcomingPostsSlice = createSlice({
  initialState,
  name: 'upcomingPosts',
  reducers: {
    getUpcomingPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    setUpcomingPosts(state, action: PayloadAction<PostResponse[]>) {
      state.upcomingPosts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUpcomingPostsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getUpcomingPostsAction = createAction(GET_UPCOMING_POSTS);

export const { setUpcomingPosts, setUpcomingPostsError, getUpcomingPosts } =
  upcomingPostsSlice.actions;

export default upcomingPostsSlice.reducer;
