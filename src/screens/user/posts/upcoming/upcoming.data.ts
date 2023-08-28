import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '@assets/images/postCardImages/userpic1.webp';
import UserPic2 from '@assets/images/postCardImages/userpic2.jpeg';
import { PostData } from './upcoming.types';

export const POST_CARD_DATA = {
  photo: Photo,
  postTags: [
    { tag: 'Dinner', id: '1' },
    { tag: 'Drinks', id: '2' },
  ],
  startDate: new Date(),
  startTime: new Date(),
  venueName: 'Miami Design District',
  venueLocation: 'American',
  postName: 'Wokabily food & drinks',
  guestMaleCount: 1,
  guestFemaleCount: 1,
  guestOtherCount: 1,
  guests: [
    { guestPhoto: UserPic1, id: '1' },
    { guestPhoto: UserPic2, id: '2' },
  ],
};

const POSTS_DATA: PostData[] = [];

for (let i = 0; i < 10; i++) {
  POSTS_DATA.push({ id: i, data: POST_CARD_DATA });
}

export default POSTS_DATA;
