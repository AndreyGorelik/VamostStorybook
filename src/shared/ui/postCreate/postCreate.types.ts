export type HostType = 'Host' | 'Guest';

export interface Post {
  date: Date;
  description: string;
  hostType: HostType;
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
