import axios from './axios';
import { API_ROUTES } from './constants';

export const createPostRequest = async (data) => {
  return await axios.post(`${API_ROUTES.createPost}`, data);
};
