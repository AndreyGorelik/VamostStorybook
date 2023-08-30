import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

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

    const refresh = await AsyncStorage.getItem('refresh');
    const userId = await AsyncStorage.getItem('userId');

    if (!refresh || !userId) throw Error;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const newData = await refreshAccessToken(refresh, userId);
      const { access, refresh: newRefresh } = newData.tokens;
      await AsyncStorage.setItem('refresh', newRefresh);
      await AsyncStorage.setItem('access', access);

      originalRequest.headers['Authorization'] = `Bearer ${access}`;

      return axios(originalRequest);
    }
    return Promise.reject(error);
  }
);

export default axios;
