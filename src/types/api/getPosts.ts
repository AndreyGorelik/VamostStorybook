import { Filters } from '@screens/home/home.screen';

export type GetPosts = {
  place: string;
  filter: Filters;
};

export type GetPostsByUser = {
  userId: string;
};
