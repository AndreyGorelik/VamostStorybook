import { Post } from './postCreate.types';

export const initialPost: Post = {
  hostType: 'Host',
  date: new Date(Date.now() + 24 * 60 * 60 * 1000),
  description: '',
  location: 'Vitebsk',
  venue: '',
  tags: [],
  menCount: 1,
  womenCount: 0,
  othersCount: 0,
  guestMenCount: 0,
  guestWomenCount: 0,
  guestOthersCount: 0,
  packageId: '',
};
