import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';

export type RecentMeetupProps = {
  id: number;
  data: { postName: string; photo: typeof Photo };
};
