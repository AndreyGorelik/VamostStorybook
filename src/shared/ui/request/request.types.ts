import { ImageSourcePropType } from 'react-native';

export interface RequestProps {
  id: string;
  name: string;
  photo?: ImageSourcePropType;
  phone?: string;
  telegram?: string;
}
