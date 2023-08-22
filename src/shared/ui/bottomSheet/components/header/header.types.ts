import { MaterialIcons } from '@expo/vector-icons';

export interface HeaderProps {
  leftIconPress?: () => void;
  rightIconPress?: () => void;
  leftIconName?: keyof typeof MaterialIcons.glyphMap;
  rightIconName?: keyof typeof MaterialIcons.glyphMap;
  title: string;
}
