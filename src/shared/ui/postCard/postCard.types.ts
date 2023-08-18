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
  photo: ImageSourcePropType;
  post_tags: PostTag[];
  start_date: Date;
  start_time: Date;
  venue_name: string;
  venue_location: string;
  post_name: string;
  guest_male_count: number;
  guest_female_count: number;
  guest_other_count: number;
  guests: PostGuests[];
}
