import Axios from 'axios';
import * as SecureStore from 'expo-secure-store';

import { API_ROUTES } from './constants';

const axios = Axios.create({});

async function refreshAccessToken(refresh: string, userId: string) {
  const data = { refresh, userId };

  const response = await axios.post(`${API_ROUTES.baseUrl}${API_ROUTES.refresh}`, data);

  return response.data;
}

axios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    const refresh = await SecureStore.getItemAsync('refresh');
    const userId = await SecureStore.getItemAsync('userId');

    if (!refresh || !userId) throw Error;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newData = await refreshAccessToken(refresh, userId);
      const { access, refresh: newRefresh } = newData.tokens;
      await SecureStore.setItemAsync('refresh', newRefresh);
      await SecureStore.setItemAsync('access', access);

      originalRequest.headers['Authorization'] = `Bearer ${access}`;

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
