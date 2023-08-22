import { MaterialIcons } from '@expo/vector-icons';

import { Theme } from '../../hooks/useTheme.hook';

export interface OutlinedBtnProps {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  disabled?: boolean;
  selected?: boolean;
  fontSize?: number;
  color?: string;
  borderRadius?: number;
  flex?: number;
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
  color?: string;
};
