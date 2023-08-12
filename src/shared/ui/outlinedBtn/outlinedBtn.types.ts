import { MaterialIcons } from '@expo/vector-icons';

import { Theme } from '../../hooks/useTheme.hook';

export interface OutlinedBtnProps {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  disabled?: boolean;
  selected?: boolean;
  color?: string;
  icon?: keyof typeof MaterialIcons.glyphMap;
}

export type OutlinedBtnStyle = {
  theme: Theme;
  width?: number;
  disabled?: boolean;
  selected?: boolean;
  color?: string;
};
