import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { CheckBox } from '@shared/ui/checkBox';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { View } from 'react-native';
import { setNextStep } from 'src/store/slices/authSlice';
import { setSexualOrientation } from 'src/store/slices/userSlice';

import { ORIENTATION_MULTI_SELECT_DATA } from './orientation.data';
import { createStyles } from './orientation.styles';
import { SelectListData, SelectListItem } from './orientation.types';

export default function Orientation() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const { sexualOrientation } = useAppSelector((state) => state.userSlice);

  const defaultValues: SelectListData = ORIENTATION_MULTI_SELECT_DATA?.map(
    (item: SelectListItem) => {
      if (item.label === sexualOrientation?.value) {
        return { ...item, selected: true };
      }
      return { ...item, selected: false };
    }
  );
  const [list, setList] = useState(defaultValues);
  const [showMyOrientation, setShowMyOrientation] = useState(
    sexualOrientation && sexualOrientation.isShown ? sexualOrientation.isShown : false
  );

  function onSubmit() {
    const orientation = list.find((item) => item.selected)?.label;
    dispatch(
      setSexualOrientation({
        isShown: showMyOrientation,
        value: orientation,
      })
    );
    dispatch(setNextStep());
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">{'My sexual \norientation is'}</Text>

      <View style={styles.content}>
        <SelectList
          list={list}
          setList={setList}
          textError="Maximum 3 orientations can be selected."
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={showMyOrientation}
          onChange={setShowMyOrientation}
          label="Show my orientation on my profile"
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
