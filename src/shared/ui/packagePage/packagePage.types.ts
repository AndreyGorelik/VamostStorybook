export interface PackagePageProps {
  date: string;
  place: string;
  description: string;
  restrictions: string[];
  onSelect: () => void | React.Dispatch<React.SetStateAction<number>>;
}
