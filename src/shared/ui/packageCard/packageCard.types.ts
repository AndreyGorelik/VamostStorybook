export interface PackageCardProps {
  date: string;
  title: string;
  place: string;
  description: string;
  restrictions: string[];
  uri: string;
  onPress: () => void | React.Dispatch<React.SetStateAction<number>>;
  id?: string;
}
