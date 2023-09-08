import { useState } from 'react';

import SelectList from './selectList.component';
import { SEXUAL_ORIENTATION_DATA, SHOW_ME_DATA } from './selectList.data';

export default {
  title: 'SelectList',
  component: SelectList,
};

const TextList = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <SelectList
      selected={selected}
      setSelected={setSelected}
      variant="textList"
      listOptions={SEXUAL_ORIENTATION_DATA}
    />
  );
};

const BtnList = () => {
  const [selected, setSelected] = useState<string>('');

  return (
    <SelectList
      selected={selected}
      setSelected={setSelected}
      variant="buttonsList"
      listOptions={SHOW_ME_DATA}
    />
  );
};

export const Default = TextList.bind({});
export const ButtonsList = BtnList.bind({});
