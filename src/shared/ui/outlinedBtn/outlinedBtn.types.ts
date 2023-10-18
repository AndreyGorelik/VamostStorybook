import { MaterialIcons } from '@expo/vector-icons';
import { Theme } from '@shared/hooks/useTheme.hook';
import { ButtonProps } from 'react-native';

export interface OutlinedBtnProps extends ButtonProps {
  onPress?: () => void;
  width?: number;
  height?: number;
  selected?: boolean;
  fontSize?: number;
  color?: string;
  borderRadius?: number;
  flex?: number;
  noDisableStyle?: boolean;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export type OutlinedBtnStyle = {
  theme: Theme;
  width?: number;
  height?: number;
  fontSize?: number;
  disabled?: boolean;
  selected?: boolean;
  borderRadius?: number;
  flex?: number;
  noDisableStyle?: boolean;
  color?: string;
};
