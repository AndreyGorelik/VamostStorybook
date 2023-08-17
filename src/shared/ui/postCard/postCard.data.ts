import Photo from '../../../assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '../../../assets/images/postCardImages/userpic1.webp';
import UserPic2 from '../../../assets/images/postCardImages/userpic2.jpeg';

export const POST_CARD_DATA = {
  photo: Photo,
  post_tags: [
    { tag: 'Dinner', id: '1' },
    { tag: 'Drinks', id: '2' },
  ],
  start_date: new Date(),
  start_time: new Date(),
  venue_name: 'Miami Design District',
  venue_location: 'American',
  post_name: 'Wokabily food & drinks',
  guest_male_count: 1,
  guest_female_count: 1,
  guest_other_count: 1,
  guests: [
    { guestPhoto: UserPic1, id: '1' },
    { guestPhoto: UserPic2, id: '2' },
  ],
};
