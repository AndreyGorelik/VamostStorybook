import { TextInputProps } from 'react-native';

export type focusAndBlur = 'focus' | 'blur';

export interface PhoneInputProps extends TextInputProps {
  setNumber: (value: string) => void;
}
