import { AxiosResponse } from 'axios';
import { RegisterEmailRequest } from 'src/types/api/registerEmail.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const registerEmailRequest = async ({
  data,
}: RegisterEmailRequest): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.email}`, data);
};
