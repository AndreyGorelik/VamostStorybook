import { useState } from 'react';

import OrientationSelect, { OrientationData, OrientationItem } from './orientationSelect.component';
import { ORIENTATION_SELECT_DATA } from './orientationSelect.data';

export default {
  title: 'OrientationSelect',
  component: OrientationSelect,
};

const Template = () => {
  const defaultValues: OrientationData = ORIENTATION_SELECT_DATA?.map((item: OrientationItem) => {
    return { ...item, selected: false };
  });
  const [list, setList] = useState(defaultValues);

  return <OrientationSelect list={list} setList={setList} maxSelectCount={3} />;
};

export const Default = Template.bind({});
