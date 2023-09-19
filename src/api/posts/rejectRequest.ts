import { AxiosResponse } from 'axios';
import { GetRequests } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const rejectRequest = async ({ id }: GetRequests): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.request}/${id}`, {
    requestStatus: 'Rejected',
  });
};
