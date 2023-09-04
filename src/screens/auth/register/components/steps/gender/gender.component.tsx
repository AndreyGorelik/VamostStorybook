import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { CheckBox } from '@shared/ui/checkBox';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { View } from 'react-native';
import { setNextStep } from 'src/store/slices/authSlice';
import { setGender } from 'src/store/slices/userSlice';

import { ORIENTATION_RADIO_DATA_WITH_OPTIONS } from './gender.data';
import { createStyles } from './gender.styles';
import { SelectListData, SelectListItem } from './gender.types';

export default function Gender() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);

  const defaultValues: SelectListData = ORIENTATION_RADIO_DATA_WITH_OPTIONS?.map(
    (item: SelectListItem) => {
      return { ...item, selected: false };
    }
  );
  const [list, setList] = useState(defaultValues);
  const [showMyGender, setShowMyGender] = useState(false);
  function onSubmit() {
    const gender = list.find((item) => item.selected)?.label;
    dispatch(
      setGender({
        isShown: false,
        value: gender,
      })
    );
    dispatch(setNextStep());
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">I&apos;m a...</Text>

      <View style={styles.content}>
        <SelectList
          list={list}
          setList={setList}
          maxSelectCount={1}
          moreOption={true}
          moreAction={onSubmit}
        />
        <CheckBox
          value={showMyGender}
          onChange={setShowMyGender}
          label="Show my gender on my profile"
        />
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
