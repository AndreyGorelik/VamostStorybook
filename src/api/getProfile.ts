import { AxiosResponse } from 'axios';
import { Profile } from 'src/store/slices/profileSlice';

import axios from './axios';
import { API_ROUTES } from './constants';

export const getProfileRequest = async (id: string): Promise<AxiosResponse<Profile>> => {
  return await axios.get(`${API_ROUTES.users}/${id}`);
};
