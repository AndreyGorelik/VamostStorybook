export interface SelectListItem {
  label: string;
  id: string;
}

export type SelectListData = SelectListItem[];

export interface SelectListProps {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  listOptions: SelectListItem[];
  variant: 'textList' | 'buttonsList';
}
