import { AxiosResponse } from 'axios';
import { SendRequest } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const sendRequest = async ({ id }: SendRequest): Promise<AxiosResponse<string>> => {
  return await axios.post(`${API_ROUTES.request}`, {
    postId: id,
  });
};
