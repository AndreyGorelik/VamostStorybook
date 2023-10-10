import { AxiosResponse } from 'axios';
import { RegisterUser } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const signUpRequest = async (data: RegisterUser): Promise<AxiosResponse<string>> => {
  return await axios.post(`${API_ROUTES.signUp}`, data);
};
