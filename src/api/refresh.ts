import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { RefreshResponse } from 'src/types/api/refresh.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const refreshRequest = async (): Promise<AxiosResponse<RefreshResponse>> => {
  const userId = await SecureStore.getItemAsync('userId');
  const refresh = await SecureStore.getItemAsync('refresh');
  return await axios.post(`${API_ROUTES.refresh}`, { userId, refresh });
};
