export interface Post {
  date: Date;
  description: string;
  host: boolean;
  location: string;
  tags: string[];
  menCount: number;
  womenCount: number;
  otherCount: number;
  guestsMenCount: number;
  guestsWomenCount: number;
  guestsOtherCount: number;
}