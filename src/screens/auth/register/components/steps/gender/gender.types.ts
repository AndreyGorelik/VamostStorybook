export interface GenderProps {
  goAhead: () => void;
}

export interface SelectListItem {
  label: string;
  id: string;
  selected?: boolean;
}

export type SelectListData = SelectListItem[];

export interface SelectListProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
  maxSelectCount: number;
  textError?: string;
  moreOption?: boolean;
  moreAction?: (arg0: unknown) => void;
}
