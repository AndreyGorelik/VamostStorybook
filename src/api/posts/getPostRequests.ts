import { AxiosResponse } from 'axios';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getPostRequestsRequest = async ({
  id,
  requestStatus,
}: GetRequests): Promise<AxiosResponse<PostRequest[]>> => {
  return await axios.get(`${API_ROUTES.request}`, {
    params: {
      postId: id,
      requestStatus,
    },
  });
};
