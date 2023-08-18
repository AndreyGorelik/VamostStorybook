import { MaterialIcons } from '@expo/vector-icons';
import { PressableProps } from 'react-native';

export interface HeaderButtonProps extends PressableProps {
  icon: keyof typeof MaterialIcons.glyphMap;
  isBackground?: boolean;
  variant: 'left' | 'right';
}
