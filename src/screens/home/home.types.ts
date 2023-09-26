import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import UserPic1 from '@assets/images/postCardImages/userpic1.webp';
import UserPic2 from '@assets/images/postCardImages/userpic2.jpeg';

export type PostsData = PostCardData[];

export type PostCardData = {
  photo: typeof Photo;
  type: string;
  postTags: { tag: string; id: string }[];
  startDate: Date;
  startTime: Date;
  venueName: string;
  venueLocation: string;
  postName: string;
  guestMaleCount: number;
  guestFemaleCount: number;
  guestOtherCount: number;
  guests: { photo: typeof UserPic1 | typeof UserPic2; id: string; name: string }[];
  id: string;
};
