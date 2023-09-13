import axios from './axios';
import { API_ROUTES } from './constants';

export const getVenuesRequest = async (location: string) => {
  return await axios.get(`${API_ROUTES.getVenues}` + '?location=' + location);
};
