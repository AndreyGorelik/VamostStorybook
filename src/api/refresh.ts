import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { RefreshResponse } from 'src/types/api/refresh.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const refreshRequest = async (): Promise<AxiosResponse<RefreshResponse>> => {
  const refreshToken = await SecureStore.getItemAsync('refresh');
  const userId = await SecureStore.getItemAsync('userId');
  return await axios.post(`${API_ROUTES.users}/${userId}/${API_ROUTES.refresh}`, { refreshToken });
};
