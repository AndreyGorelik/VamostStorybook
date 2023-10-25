import { AxiosResponse } from 'axios';
import { GetRequests, PostRequest } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getUserRequestsRequest = async ({
  id,
}: GetRequests): Promise<AxiosResponse<PostRequest[]>> => {
  return await axios.get(`${API_ROUTES.request}`, {
    params: {
      userId: id,
    },
  });
};
