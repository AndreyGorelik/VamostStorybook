export interface BirthdayInputProps {
  onChange?: (input: string) => void;
  errors?: BirthdayErrors;
}

export type BirthdayErrors = {
  month: boolean;
  day: boolean;
  year: boolean;
};
