import { GetPackages } from 'src/types/actions/actions.types';

import axios from './axios';
import { API_ROUTES } from './constants';

export const getPackagesRequest = async ({ maxPeople, tags, placeId }: GetPackages) => {
  return await axios.get(
    `${API_ROUTES.getPackages}/${tags.reduce((acc, tag, index) => {
      if (index === 0) {
        acc += `?tags=${tag}`;
        return acc;
      }
      acc += `&tags=${tag}`;
      return acc;
    }, '')}`,
    {
      params: {
        placeId,
        maxPeople,
      },
    }
  );
};
