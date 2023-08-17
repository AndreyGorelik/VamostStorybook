import { MaterialIcons } from '@expo/vector-icons';

export interface HeaderImageProps {
  leftIconPress?: () => void;
  rightIconPress?: () => void;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  rightIconName?: keyof typeof MaterialIcons.glyphMap;
  title: string;
  uri?: string;
}
