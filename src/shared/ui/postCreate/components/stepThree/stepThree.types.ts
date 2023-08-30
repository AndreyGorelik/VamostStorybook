import { Post } from '../../postCreate.types';

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

export interface StepThreeProps {
  post: Post;
  setPost: React.Dispatch<React.SetStateAction<Post>>;
  next: () => void;
}
