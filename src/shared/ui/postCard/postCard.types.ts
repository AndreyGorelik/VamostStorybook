import { ImageSourcePropType } from 'react-native';

export interface PostTag {
  tag: string;
  id: string;
}

export interface PostGuests {
  guestPhoto: ImageSourcePropType;
  id: string;
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
