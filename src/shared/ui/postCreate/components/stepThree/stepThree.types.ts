export interface StepOneProps {
  onSelect: (arg0: boolean) => void;
}

export interface PeopleCounter {
  menCount: number;
  womenCount: number;
  otherCount: number;
  guestsMenCount: number;
  guestsWomenCount: number;
  guestsOtherCount: number;
  [key: string]: number;
}
