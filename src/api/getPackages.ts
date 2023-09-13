import axios from './axios';
import { API_ROUTES } from './constants';

export const getPackagesRequest = async ({ maxPeople, tags, placeId }) => {
  return await axios.get(
    `${API_ROUTES.getPackages}` +
      '?placeId=' +
      placeId +
      '&tags=' +
      tags.join(',') +
      '&maxPeople=' +
      maxPeople
  );
};
