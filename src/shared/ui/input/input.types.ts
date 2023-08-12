export interface TextInputCustom {
  placeholder: string;
  value: string;
  [x: string]: unknown;
}

export type focusAndBlur = 'focus' | 'blur';
