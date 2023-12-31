import { AxiosResponse } from 'axios';
import { RegisterNicknameRequest } from 'src/types/api/registerNickname.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const registerNicknameRequest = async ({
  data,
}: RegisterNicknameRequest): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.nickname}`, data);
};
