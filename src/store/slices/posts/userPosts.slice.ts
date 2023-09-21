import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_POSTS_BY_USER } from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';

export interface userPostsState {
  userPosts: PostResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: userPostsState = {
  userPosts: [],
  isLoading: false,
  error: null,
};

const userPostsSlice = createSlice({
  initialState,
  name: 'userPosts',
  reducers: {
    getUserPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    setUserPosts(state, action: PayloadAction<PostResponse[]>) {
      state.userPosts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setUserPostsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getUserPostsAction = createAction(GET_POSTS_BY_USER);

export const { setUserPosts, setUserPostsError, getUserPosts } = userPostsSlice.actions;

export default userPostsSlice.reducer;
