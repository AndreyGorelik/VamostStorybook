import { AxiosResponse } from 'axios';
import { RegisterPhotoRequest } from 'src/types/api/registerPhoto.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const registerPhotoRequest = async ({
  data,
}: RegisterPhotoRequest): Promise<AxiosResponse<string>> => {
  return await axios.patch(`${API_ROUTES.image}`, data, {
    headers: {
      'content-type': 'multipart/form-data',
    },
  });
};
