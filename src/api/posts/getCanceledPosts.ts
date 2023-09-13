import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { PostResponse } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getCanceledPostsRequest = async (): Promise<AxiosResponse<PostResponse[]>> => {
  const userId = await SecureStore.getItemAsync('userId');
  return await axios.get(API_ROUTES.post, {
    params: {
      postStatus: 'Canceled',
      userId,
    },
  });
};
