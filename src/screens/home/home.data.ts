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
    { photo: UserPic1, id: '1', name: 'Natasha Romanoff' },
    { photo: UserPic2, id: '2', name: 'Elena Belova' },
  ],
  id: '1',
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
    { photo: UserPic1, id: '1', name: 'Natasha Romanoff' },
    { photo: UserPic2, id: '2', name: 'Elena Belova' },
  ],
  id: '2',
};

export const POSTS = [POST_CARD_DATA, POST_CARD_DATA_2];
