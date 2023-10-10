export interface TagsList {
  id: string;
  label: string;
}

export interface TagListProps {
  selectedList: string[];
  setSelectedList: (tags: string[]) => void;
  tagsList: TagsList[];
}
