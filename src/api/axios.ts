import Axios, { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { RefreshResponse } from 'src/types/api/refresh.types';

import { API_ROUTES } from './constants';

const axios = Axios.create({
  baseURL: API_ROUTES.baseURL,
});

async function refreshAccessToken(refreshToken: string, userId: string) {
  const data = { refreshToken };

  const response: AxiosResponse<RefreshResponse> = await axios.post(
    `${API_ROUTES.auth}/${userId}/${API_ROUTES.refresh}`,
    data
  );

  return response.data;
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const refresh = await SecureStore.getItemAsync('refresh');
    const userId = await SecureStore.getItemAsync('userId');

    if (!refresh || !userId) return Promise.reject(error);

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newData = await refreshAccessToken(refresh, userId);
      const { accessToken, refreshToken: newRefresh } = newData.tokens;
      await SecureStore.setItemAsync('refresh', newRefresh);
      await SecureStore.setItemAsync('access', accessToken);

      originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

axios.interceptors.request.use(
  async (config) => {
    const accessToken = await SecureStore.getItemAsync('access');

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
