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
  packageId: string;
}

export interface PostCreateProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
