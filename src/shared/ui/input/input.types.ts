export interface TextInputCustom {
  placeholder: string;
  value: string;
  onChangeText?: (text: string) => void;
  [x: string]: unknown;
}

export type focusAndBlur = 'focus' | 'blur';
