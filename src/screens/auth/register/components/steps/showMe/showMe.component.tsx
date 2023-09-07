import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { View } from 'react-native';
import { registerAttributes } from 'src/store/slices/authSlice';

import { ORIENTATION_RADIO_DATA } from './showMe.data';
import { createStyles } from './showMe.styles';
import { SelectListData, SelectListItem } from './showMe.types';

export default function ShowMe() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const { birthdate, gender, sexualOrientation, shownGender } = useAppSelector(
    (state) => state.userSlice
  );

  const defaultValues: SelectListData = ORIENTATION_RADIO_DATA?.map((item: SelectListItem) => {
    if (item.label === shownGender) {
      return { ...item, selected: true };
    }
    return { ...item, selected: false };
  });
  const [list, setList] = useState(defaultValues);

  function onSubmit() {
    const shownGender = list.find((item) => item.selected)?.label || 'Man';

    dispatch(
      registerAttributes({
        birthdate,
        gender,
        sexualOrientation,
        shownGender,
      })
    );
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">Show me</Text>

      <View style={styles.content}>
        <SelectList list={list} setList={setList} maxSelectCount={1} />
      </View>
      <Button
        title="Continue"
        onPress={onSubmit}
        disabled={!list.some((item) => item.selected)}
        loading={isLoading}
      />
    </View>
  );
}
