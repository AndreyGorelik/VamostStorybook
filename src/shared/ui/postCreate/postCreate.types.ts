export interface Post {
  date: Date;
  description: string;
  host: boolean;
  location: string;
  tags: string[];
  menCount: number;
  womenCount: number;
  othersCount: number;
  guestMenCount: number;
  guestWomenCount: number;
  guestOthersCount: number;
  packageId: string;
  venue: string;
}

export interface PostCreateProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
