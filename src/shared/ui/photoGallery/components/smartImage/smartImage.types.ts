import { ImageContentFit } from 'expo-image';
import { ImageStyle } from 'react-native';
import { Photo } from 'src/store/slices/profileSlice';

export interface SmartImageProps {
  photo: Photo;
  style: ImageStyle;
  contentFit?: ImageContentFit;
}

export enum LoadStatus {
  PENDING = 'pending',
  DONE = 'done',
  ERROR = 'error',
}
