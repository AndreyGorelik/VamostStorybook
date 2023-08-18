export interface SelectListItem {
  label: string;
  id: string;
  selected?: boolean;
}

export type SelectListData = SelectListItem[];

export interface OrientationSelectProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
  maxSelectCount?: number;
}
