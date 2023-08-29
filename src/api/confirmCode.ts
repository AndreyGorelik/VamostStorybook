import { AxiosResponse } from 'axios';
import { ConfirmCode } from 'src/types/actions/actions.types';
import { ConfirmCodeResponse } from 'src/types/api/confirmCode.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const confirmCodeRequest = async (
  data: ConfirmCode
): Promise<AxiosResponse<ConfirmCodeResponse>> => {
  return await axios.post(`${API_ROUTES.baseUrl}${API_ROUTES.confirm}`, data);
};
