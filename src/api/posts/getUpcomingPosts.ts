import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { PostResponse } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getUpcomingPostsRequest = async (): Promise<AxiosResponse<PostResponse[]>> => {
  const ownerId = await SecureStore.getItemAsync('userId');

  const statuses = ['Active', 'New'];

  const query = `?${statuses.map((value) => `postStatus=${value}`).join('&')}`;

  return await axios.get(`${API_ROUTES.post}${query}`, {
    params: {
      ownerId,
    },
  });
};
