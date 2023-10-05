import { AxiosResponse } from 'axios';
import * as SecureStore from 'expo-secure-store';
import { PostInfo } from 'src/store/slices/post/post.slice';
import { PostResponse } from 'src/types/actions/actions.types';
import { GetPost } from 'src/types/api/getPosts';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getPostRequest = async ({ id }: GetPost): Promise<AxiosResponse<PostInfo>> => {
  const userId = await SecureStore.getItemAsync('userId');
  const response: AxiosResponse<PostResponse> = await axios.get(`${API_ROUTES.post}/${id}`);

  return {
    ...response,
    data: {
      info: response.data,
      isUsersPost: response.data.host.id === userId,
    },
  };
};
