import { AxiosResponse } from 'axios';
import { UpdatePostStatus } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const setPostStatusRequest = async ({
  id,
  postStatus,
}: UpdatePostStatus): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.post}/${id}/${API_ROUTES.setStatus}`, {
    postStatus,
  });
};
