export interface BirthdayInputProps {
  onChange?: (input: string) => void;
  errors?: BirthdayErrors;
}

export type BirthdayErrors = {
  month: boolean;
  day: boolean;
  year: boolean;
};

export type BirthdayValues = {
  day1: string;
  day2: string;
  month1: string;
  month2: string;
  year1: string;
  year2: string;
  year3: string;
  year4: string;
};
