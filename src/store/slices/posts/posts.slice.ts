import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import { GET_POSTS } from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPosts } from 'src/types/api/getPosts';

export interface PostsState {
  posts: PostResponse[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    getPosts(state) {
      state.isLoading = true;
      state.error = null;
    },
    setPosts(state, action: PayloadAction<PostResponse[]>) {
      state.posts = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    setPostsError(state, action: PayloadAction<string | null>) {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export const getPostsAction = createAction<GetPosts>(GET_POSTS);

export const { setPosts, setPostsError, getPosts } = postsSlice.actions;

export default postsSlice.reducer;
