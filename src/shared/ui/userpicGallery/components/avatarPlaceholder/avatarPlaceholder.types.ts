import { ImageStyle, ViewProps, ViewStyle } from 'react-native';
import { GuestType } from 'src/types/actions/actions.types';

export interface AvatarPlaceholderProps extends ViewProps {
  size: number;
  item: GuestType;
  style?: ViewStyle;
  imageStyle?: ImageStyle;
}
