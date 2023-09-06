import { useState } from 'react';

import TagList from './tagList.component';
import { TAG_LIST_DATA } from './tagList.data';
export default {
  title: 'TagList',
  component: TagList,
};

const Template = () => {
  const [selectedList, setSelectedList] = useState<string[]>([]);

  return (
    <TagList
      selectedList={selectedList}
      setSelectedList={setSelectedList}
      tagsList={TAG_LIST_DATA}
    />
  );
};

export const Default = Template.bind({});
