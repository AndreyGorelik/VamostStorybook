import { GetPackages } from 'src/types/actions/actions.types';

import axios from '../axios';
import { API_ROUTES } from '../constants';

export const getPackagesRequest = async ({ maxPeople, tags, placeId }: GetPackages) => {
  const query = `?${tags.map((tag) => `tags=${tag}`).join('&')}`;

  return await axios.get(`${API_ROUTES.getPackages}${query}`, {
    params: {
      placeId,
      maxPeople,
    },
  });
};
