import axios from './axios';
import { API_ROUTES } from './constants';

export const getFullPackageRequest = async (packageId: string) => {
  return await axios.get(`${API_ROUTES.getPackages}/${packageId}`);
};
