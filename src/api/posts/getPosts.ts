import { AxiosResponse } from 'axios';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPosts } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getPostsRequest = async ({
  place,
  filter,
}: GetPosts): Promise<AxiosResponse<PostResponse[]>> => {
  return await axios.get(API_ROUTES.post, {
    params: {
      location: place,
      filter,
    },
  });
};
