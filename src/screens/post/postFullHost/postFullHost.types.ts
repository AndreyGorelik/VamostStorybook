import { PostGuests } from '@shared/ui/postCard/postCard.types';
import { ImageSourcePropType } from 'react-native';

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
  requests: RequestProps[];
}
