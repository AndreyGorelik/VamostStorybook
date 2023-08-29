import { AxiosResponse } from 'axios';
import { LoginUser } from 'src/types/actions/actions.types';
import { SignInResponse } from 'src/types/api/signIn.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const signInRequest = async (data: LoginUser): Promise<AxiosResponse<SignInResponse>> => {
  return await axios.post(`${API_ROUTES.baseUrl}${API_ROUTES.signIn}`, data);
};
