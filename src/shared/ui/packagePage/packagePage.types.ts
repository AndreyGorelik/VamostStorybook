export interface PackagePageProps {
  date: string;
  place: string;
  description: string;
  onSelect: () => void | React.Dispatch<React.SetStateAction<number>>;
  minSpend: number;
  maxPeople: number;
}
