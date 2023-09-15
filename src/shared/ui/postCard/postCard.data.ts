import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import { PostResponse } from 'src/types/actions/actions.types';

export const POST_CARD_DATA: PostResponse = {
  imageUrl: Photo,
  tags: ['dinner', 'drinks'],
  date: '2023-09-11T10:00:00',
  venue: 'Miami Design District',
  location: 'American',
  name: 'Wokabily food & drinks',
  guestMenCount: 1,
  guestWomenCount: 1,
  guestOthersCount: 1,
  othersCount: 0,
  menCount: 0,
  postStatus: 'Created',
  womenCount: 0,
  packageId: '',
  userId: '',
  description: '',
  id: '',
};
