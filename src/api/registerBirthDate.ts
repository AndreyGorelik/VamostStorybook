import { AxiosResponse } from 'axios';
import { RegisterBirthDateRequest } from 'src/types/api/registerBirthDate.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const registerBirthDateRequest = async ({
  data,
}: RegisterBirthDateRequest): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.birthdate}`, data);
};
