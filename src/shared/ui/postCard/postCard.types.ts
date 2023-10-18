import { Photo } from 'src/store/slices/profileSlice';
import { PostStatus } from 'src/types/actions/actions.types';

export interface PostTag {
  tag: string;
  id: string;
}

export interface PostGuests {
  avatar: Photo;
  _id: string;
  nickName: string;
}

export interface PostCardProps {
  photo: string;
  postTags: PostTag[];
  startDate: Date;
  startTime: Date;
  venueName: string;
  venueLocation: string;
  postName: string;
  guestMaleCount: number;
  guestFemaleCount: number;
  guestOtherCount: number;
  guests: PostGuests[];
}

export type ButtonStyle = {
  title: string;
  color: string;
};

export type ButtonStyles = Record<PostStatus, ButtonStyle>;
