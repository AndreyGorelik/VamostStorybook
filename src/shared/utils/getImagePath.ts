import { API_ROUTES } from 'src/api/constants';
import { Photo } from 'src/store/slices/profileSlice';

export function getImagePath(image: Photo) {
  return `${API_ROUTES.baseURL}/${API_ROUTES.pictures}/${image.imagePath}`;
}
