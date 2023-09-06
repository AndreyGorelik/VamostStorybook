export interface SelectListItem {
  label: string;
  id: string;
}

export type SelectListData = SelectListItem[];

export interface SelectListProps {
  selected: string;
  setSelected: (value: string) => void;
  listOptions: SelectListItem[];
  variant: 'textList' | 'buttonsList';
}
