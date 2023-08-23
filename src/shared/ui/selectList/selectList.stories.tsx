import { useState } from 'react';
import { Alert } from 'react-native';

import SelectList from './selectList.component';
import { ORIENTATION_MULTI_SELECT_DATA, ORIENTATION_RADIO_DATA } from './selectList.data';
import { SelectListData, SelectListItem } from './selectList.types';

export default {
  title: 'SelectList',
  component: SelectList,
};

const MultiSelectTemplate = () => {
  const defaultValues: SelectListData = ORIENTATION_MULTI_SELECT_DATA?.map(
    (item: SelectListItem) => {
      return { ...item, selected: false };
    }
  );
  const [list, setList] = useState(defaultValues);

  return <SelectList list={list} setList={setList} maxSelectCount={3} />;
};

const RadioButtonSelectTemplate = () => {
  const defaultValues: SelectListData = ORIENTATION_RADIO_DATA?.map((item: SelectListItem) => {
    return { ...item, selected: false };
  });
  const [list, setList] = useState(defaultValues);

  return <SelectList list={list} setList={setList} maxSelectCount={1} />;
};

const RadioButtonSelectTemplateWithMore = () => {
  const defaultValues: SelectListData = ORIENTATION_RADIO_DATA?.map((item: SelectListItem) => {
    return { ...item, selected: false };
  });
  const [list, setList] = useState(defaultValues);

  const doSomething = () => {
    Alert.alert('additional function');
  };

  return (
    <SelectList
      list={list}
      setList={setList}
      maxSelectCount={1}
      moreOption={true}
      moreAction={doSomething}
    />
  );
};

export const Default = MultiSelectTemplate.bind({});
export const RadioButtonSelect = RadioButtonSelectTemplate.bind({});
export const WithMoreOptions = RadioButtonSelectTemplateWithMore.bind({});
