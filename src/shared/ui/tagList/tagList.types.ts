export interface TagsList {
  id: string;
  label: string;
}

export interface TagListProps {
  selectedList: string[];
  setSelectedList: React.Dispatch<React.SetStateAction<string[]>>;
  tagsList: TagsList[];
}
