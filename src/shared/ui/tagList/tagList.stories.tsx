import { useState } from 'react';

import { SelectListData, SelectListItem } from '../orientationSelect/orientationSelect.component';

import TagList from './tagList.component';
import { TAG_LIST_DATA } from './tagList.data';
export default {
  title: 'TagList',
  component: TagList,
};

const Template = () => {
  const defaultValues: SelectListData = TAG_LIST_DATA?.map((item: SelectListItem) => {
    return { ...item, selected: false };
  });
  const [list, setList] = useState(defaultValues);

  return <TagList list={list} setList={setList} />;
};

export const Default = Template.bind({});
