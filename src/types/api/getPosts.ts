import { Filters } from '@screens/home/home.screen';
import { Photo } from 'src/store/slices/profileSlice';

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

export type RequestStatus = 'New' | 'Approve' | 'Rejected';

export type GetRequests = {
  id: string;
  requestStatus?: RequestStatus;
};

export type TakeDecision = {
  postId: string;
  requestId: string;
  decision?: RequestStatus;
};

export type PostRequest = {
  postId: string;
  _id: string;
  requestStatus: RequestStatus;
  user: {
    avatar: Photo;
    nickName: string;
    _id: string;
  };
};
