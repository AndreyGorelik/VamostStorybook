import { Post } from '../../postCreate.types';

export interface StepOneProps {
  onSelect: (arg0: boolean) => void;
}

export interface PeopleCounter {
  menCount: number;
  womenCount: number;
  othersCount: number;
  guestMenCount: number;
  guestWomenCount: number;
  guestOthersCount: number;
  [key: string]: number;
}

export interface StepThreeProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
}
