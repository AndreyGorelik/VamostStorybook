import { AxiosResponse } from 'axios';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPosts } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

type Params = {
  location: string;
  hostType?: string;
};

export const getPostsRequest = async ({
  place,
  filter,
}: GetPosts): Promise<AxiosResponse<PostResponse[]>> => {
  const params: Params = {
    location: place,
  };
  if (filter !== 'All') {
    params.hostType = filter.slice(0, filter.length - 1);
  }
  return await axios.get(API_ROUTES.post, {
    params: params,
  });
};
