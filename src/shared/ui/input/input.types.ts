import { TextInputProps } from 'react-native';

export type focusAndBlur = 'focus' | 'blur';

export interface InputProps extends TextInputProps {
  fontSize?: number;
}
