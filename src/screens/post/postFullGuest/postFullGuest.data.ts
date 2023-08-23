import Photo from '../../../assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '../../../assets/images/postCardImages/userpic1.webp';
import UserPic2 from '../../../assets/images/postCardImages/userpic2.jpeg';
export const POST_FULL_GUEST_DATA = {
  photo: Photo,
  host: {
    name: 'Natasha',
    userPic: UserPic1,
  },
  date: new Date(),
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
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tempus sagittis ex, nec condimentum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras dignissim orci magna, eu ornare velit faucibus sit amet. Etiam rutrum egestas metus. Proin pulvinar sapien sed dignissim molestie. Aenean est ex, facilisis a elementum non, efficitur sit amet justo. Integer cursus tellus in arcu aliquam, sit amet consectetur libero hendrerit.',
};
