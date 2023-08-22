export interface BirthdayInputProps {
  onChange?: (input: string) => void;
  errors?: {
    month: boolean;
    day: boolean;
    year: boolean;
  };
}
