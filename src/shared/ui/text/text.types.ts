import { TextProps } from 'react-native';

export type TextVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'common'
  | 'warning'
  | 'medium'
  | 'disabled';

export interface CustomText extends TextProps {
  children: string | string[];
  color?: string;
  variant?: TextVariant;
  noMargin?: boolean;
  weight?: string;
}
