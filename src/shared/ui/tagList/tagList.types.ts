import { SelectListData } from '../selectList/selectList.types';

export interface TagListProps {
  list: SelectListData;
  setList: React.Dispatch<React.SetStateAction<SelectListData>>;
}
