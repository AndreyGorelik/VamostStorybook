export interface PhotoInputProps {
  image: string;
  id: number;
  onDelete: (id: number) => void;
  pickImage: () => Promise<void>;
  loading: boolean;
  height: number;
}
