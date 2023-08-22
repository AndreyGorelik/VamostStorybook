import Photo from '../../../assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '../../../assets/images/postCardImages/userpic1.webp';
import UserPic2 from '../../../assets/images/postCardImages/userpic2.jpeg';
import Dinner from '../../../assets/images/postFullImages/dinner.png';
import Drinks from '../../../assets/images/postFullImages/drinks.png';
export const POST_FULL_HOST_DATA = {
  photo: Photo,
  post_tags: [
    {
      label: 'Dinner',
      icon: Dinner,
      id: '1',
    },
    { label: 'Drinks', icon: Drinks, id: '2' },
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
  requests: [
    {
      name: 'Chakrika Joyanto',
      photo: UserPic1,
      phone: '+375291234567',
      telegram: '@account',
      id: '1',
    },
    {
      name: 'Chakrika Joyanto',
      photo: UserPic1,
      phone: '+375291234567',
      telegram: '@account',
      id: '2',
    },
  ],
};
