import { Filters } from '@screens/home/home.screen';

import { PostStatus } from '../actions/actions.types';

export type GetPosts = {
  place: string;
  filter: Filters;
};

export type GetPostsByUser = {
  userId: string;
};

export type GetPost = {
  id: string;
};

export type UpdatePostStatus = {
  id: string;
  postStatus: PostStatus;
};
