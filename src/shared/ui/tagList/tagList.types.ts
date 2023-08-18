import { SelectListData } from '../orientationSelect/orientationsSelect.types';

export interface TagListProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
}
