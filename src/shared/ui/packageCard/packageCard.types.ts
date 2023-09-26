export interface PackageCardProps {
  date: string;
  name: string;
  place: string;
  description: string;
  maxPeople: number;
  imageUrl: string;
  onPress: () => void | React.Dispatch<React.SetStateAction<number>>;
  id?: string;
  placeId?: string;
}
