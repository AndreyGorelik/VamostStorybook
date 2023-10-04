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
  id: string;
  requestStatus: RequestStatus;
  user: {
    avatar: string;
    nickName: string;
    id: string;
    gender: {
      value: 'Man' | 'Woman' | 'Other' | null;
      isShown: boolean;
    };
  };
};
