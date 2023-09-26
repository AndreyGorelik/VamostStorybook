import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '@assets/images/postCardImages/userpic1.webp';
import UserPic2 from '@assets/images/postCardImages/userpic2.jpeg';

export const POST_FULL_GUEST_DATA = {
  photo: Photo,
  host: {
    name: 'Natasha',
    userPic: UserPic1,
  },
  date: new Date(),
  venueName: 'Miami Design District',
  venueLocation: 'American',
  postName: 'Wokabily food & drinks',
  guestMaleCount: 1,
  guestFemaleCount: 1,
  guestOtherCount: 1,
  guests: [
    { photo: UserPic1, id: '1' },
    { photo: UserPic2, id: '2' },
  ],
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus sagittis ex, nec condimentum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dignissim orci magna, eu ornare velit faucibus sit amet. Etiam rutrum egestas metus. Proin pulvinar sapien sed dignissim molestie. Aenean est ex, facilisis a elementum non, efficitur sit amet justo. Integer cursus tellus in arcu aliquam, sit amet consectetur libero hendrerit.',
};
