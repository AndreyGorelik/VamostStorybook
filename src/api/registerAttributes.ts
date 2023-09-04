import { AxiosResponse } from 'axios';
import { RegisterAttributesRequest } from 'src/types/api/registerAttributes.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const registerAttributesRequest = async ({
  data,
}: RegisterAttributesRequest): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.userAttributes}`, data);
};
