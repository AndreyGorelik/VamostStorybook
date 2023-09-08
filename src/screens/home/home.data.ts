import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '@assets/images/postCardImages/userpic1.webp';
import UserPic2 from '@assets/images/postCardImages/userpic2.jpeg';

export const POST_CARD_DATA = {
  photo: Photo,
  type: 'Host',
  postTags: [
    { tag: 'Dinner', id: '1' },
    { tag: 'Drinks', id: '2' },
  ],
  startDate: new Date(),
  startTime: new Date(),
  venueName: 'Miami Design District',
  venueLocation: 'American',
  postName: 'Host food & drinks',
  guestMaleCount: 1,
  guestFemaleCount: 1,
  guestOtherCount: 1,
  guests: [
    { guestPhoto: UserPic1, id: '1' },
    { guestPhoto: UserPic2, id: '2' },
  ],
};

export const POST_CARD_DATA_2 = {
  photo: Photo,
  type: 'Guest',
  postTags: [
    { tag: 'Dinner', id: '1' },
    { tag: 'Drinks', id: '2' },
  ],
  startDate: new Date(),
  startTime: new Date(),
  venueName: 'Miami Design District',
  venueLocation: 'American',
  postName: 'Guest food & drinks',
  guestMaleCount: 1,
  guestFemaleCount: 1,
  guestOtherCount: 1,
  guests: [
    { guestPhoto: UserPic1, id: '1' },
    { guestPhoto: UserPic2, id: '2' },
  ],
};

export const POSTS = [
  { id: 1, data: POST_CARD_DATA },
  { id: 2, data: POST_CARD_DATA_2 },
  { id: 3, data: POST_CARD_DATA },
  { id: 4, data: POST_CARD_DATA_2 },
  { id: 5, data: POST_CARD_DATA },
  { id: 6, data: POST_CARD_DATA_2 },
  { id: 7, data: POST_CARD_DATA },
  { id: 8, data: POST_CARD_DATA_2 },
  { id: 9, data: POST_CARD_DATA },
  { id: 10, data: POST_CARD_DATA_2 },
];
