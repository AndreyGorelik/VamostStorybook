import axios from './axios';
import { API_ROUTES } from './constants';

export const deleteUserPhotoRequest = async (id: string) => {
  return await axios.delete(`${API_ROUTES.image}/`, {
    data: {
      imageId: id,
    },
  });
};
