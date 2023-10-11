import { AxiosResponse } from 'axios';
import { TakeDecision } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const confirmRequest = async ({
  postId,
  requestId,
  decision = 'Approve',
}: TakeDecision): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.request}/${requestId}`, {
    postId,
    decision,
  });
};
