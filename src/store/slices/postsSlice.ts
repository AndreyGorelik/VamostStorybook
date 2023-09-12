import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  GET_CANCELED_POSTS,
  GET_PAST_POSTS,
  GET_POSTS,
  GET_POSTS_BY_USER,
  GET_UPCOMING_POSTS,
} from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPosts } from 'src/types/api/getPosts';

export interface PostsState {
  upcomingPosts: PostResponse[];
  canceledPosts: PostResponse[];
  pastPosts: PostResponse[];
  posts: PostResponse[];
  isLoading: boolean;
}

const initialState: PostsState = {
  upcomingPosts: [],
  canceledPosts: [],
  pastPosts: [],
  posts: [],
  isLoading: false,
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setPosts(state, action: PayloadAction<PostResponse[]>) {
      state.posts = action.payload;
    },
    setIsLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setUpcomingPosts(state, action: PayloadAction<PostResponse[]>) {
      state.upcomingPosts = action.payload;
    },
    setPastPosts(state, action: PayloadAction<PostResponse[]>) {
      state.pastPosts = action.payload;
    },
    setCanceledPosts(state, action: PayloadAction<PostResponse[]>) {
      state.canceledPosts = action.payload;
    },
  },
});

export const getPosts = createAction<GetPosts>(GET_POSTS);
export const getPostsByUser = createAction(GET_POSTS_BY_USER);
export const getCanceledPosts = createAction(GET_CANCELED_POSTS);
export const getUpcomingPosts = createAction(GET_UPCOMING_POSTS);
export const getPastPosts = createAction(GET_PAST_POSTS);

export const { setPosts, setIsLoading, setPastPosts, setUpcomingPosts, setCanceledPosts } =
  postsSlice.actions;

export default postsSlice.reducer;
