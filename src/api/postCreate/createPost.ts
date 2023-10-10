import { CreatePostData } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const createPostRequest = async (data: CreatePostData) => {
  return await axios.post(`${API_ROUTES.createPost}`, data);
};
