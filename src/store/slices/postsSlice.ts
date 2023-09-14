import { PayloadAction, createAction, createSlice } from '@reduxjs/toolkit';
import {
  GET_CANCELED_POSTS,
  GET_PAST_POSTS,
  GET_POST,
  GET_POSTS,
  GET_POSTS_BY_USER,
  GET_UPCOMING_POSTS,
  UPDATE_POST_STATUS,
} from '@shared/constants/actions';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPost, GetPosts, UpdatePostStatus } from 'src/types/api/getPosts';

export type PostInfo = {
  info: PostResponse | null;
  isUsersPost: boolean;
} | null;

export interface PostsState {
  upcomingPosts: PostResponse[];
  canceledPosts: PostResponse[];
  pastPosts: PostResponse[];
  posts: PostResponse[];
  post: PostInfo;
  isLoading: boolean;
  updateLoading: boolean;
}

const initialState: PostsState = {
  upcomingPosts: [],
  canceledPosts: [],
  pastPosts: [],
  posts: [],
  post: null,
  isLoading: false,
  updateLoading: false,
};

const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setPosts(state, action: PayloadAction<PostResponse[]>) {
      state.posts = action.payload;
    },
    setPost(state, action: PayloadAction<PostInfo>) {
      state.post = action.payload;
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
    setIsUpdateLoading(state, action: PayloadAction<boolean>) {
      state.updateLoading = action.payload;
    },
  },
});

export const getPosts = createAction<GetPosts>(GET_POSTS);
export const getPost = createAction<GetPost>(GET_POST);
export const getPostsByUser = createAction(GET_POSTS_BY_USER);
export const getCanceledPosts = createAction(GET_CANCELED_POSTS);
export const getUpcomingPosts = createAction(GET_UPCOMING_POSTS);
export const getPastPosts = createAction(GET_PAST_POSTS);
export const updatePostStatus = createAction<UpdatePostStatus>(UPDATE_POST_STATUS);

export const {
  setPosts,
  setIsLoading,
  setPastPosts,
  setUpcomingPosts,
  setCanceledPosts,
  setPost,
  setIsUpdateLoading,
} = postsSlice.actions;

export default postsSlice.reducer;
