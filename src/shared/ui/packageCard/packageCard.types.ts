import { Photo } from 'src/store/slices/profileSlice';

export interface PackageCardProps {
  date: string;
  name: string;
  place: string;
  description: string;
  maxPeople: number;
  images: Photo[];
  avatar?: Photo;
  onPress: () => void | React.Dispatch<React.SetStateAction<number>>;
  id?: string;
  placeId?: string;
}
