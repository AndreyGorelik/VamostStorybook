import { Theme } from '@shared/hooks/useTheme.hook';

export interface CustomButton {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  disabled?: boolean;
  color?: string;
  loading?: boolean;
}

export type StylesOptions = {
  theme: Theme;
  disabled?: boolean;
  width?: number;
  color?: string;
};
