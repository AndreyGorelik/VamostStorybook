import { SharedValue } from 'react-native-reanimated';

export interface ContentWrapperProps {
  height: SharedValue<number>;
  headerStyle: 'image' | 'default';
  maxHeight: number;
}
