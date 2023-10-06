import { Theme } from '@shared/hooks/useTheme.hook';
import { DimensionValue } from 'react-native';

export interface CustomButton {
  title: string;
  onPress: () => void;
  width?: DimensionValue;
  height?: number;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
}

export type StylesOptions = {
  theme: Theme;
  disabled?: boolean;
  width?: DimensionValue;
  color?: string;
};
