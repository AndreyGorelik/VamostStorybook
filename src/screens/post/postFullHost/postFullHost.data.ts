import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '@assets/images/postCardImages/userpic1.webp';
import UserPic2 from '@assets/images/postCardImages/userpic2.jpeg';
import Dinner from '@assets/images/postFullImages/dinner.png';
import Drinks from '@assets/images/postFullImages/drinks.png';

export const POST_FULL_HOST_DATA = {
  photo: Photo,
  postTags: [
    {
      label: 'Dinner',
      icon: Dinner,
      id: '1',
    },
    { label: 'Drinks', icon: Drinks, id: '2' },
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
    { guestPhoto: UserPic2, id: '3' },
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
    {
      name: 'Chakrika Joyanto',
      photo: UserPic1,
      phone: '+375291234567',
      telegram: '@account',
      id: '3',
    },
    {
      name: 'Chakrika Joyanto',
      photo: UserPic1,
      phone: '+375291234567',
      telegram: '@account',
      id: '4',
    },
  ],
};
