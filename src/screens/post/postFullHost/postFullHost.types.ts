import { ImageSourcePropType } from 'react-native';

import { PostGuests } from '../../../shared/ui/postCard/postCard.types';
export interface PostTag {
  label: string;
  id: string;
  icon: ImageSourcePropType;
}

export interface RequestProps {
  id: string;
  name: string;
  photo: ImageSourcePropType;
  phone?: string;
  telegram?: string;
}

export interface PostFullHostProps {
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
  requests: RequestProps[];
}
