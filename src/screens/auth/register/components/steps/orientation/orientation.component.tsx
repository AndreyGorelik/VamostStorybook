import { useAppDispatch } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { View } from 'react-native';
import { setNextStep } from 'src/store/slices/authSlice';
import { setSexualOrientation } from 'src/store/slices/userSlice';

import { ORIENTATION_MULTI_SELECT_DATA } from './orientation.data';
import { createStyles } from './orientation.styles';
import { OrientationProps, SelectListData, SelectListItem } from './orientation.types';

export default function Orientation({ goAhead }: OrientationProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const defaultValues: SelectListData = ORIENTATION_MULTI_SELECT_DATA?.map(
    (item: SelectListItem) => {
      return { ...item, selected: false };
    }
  );
  const [list, setList] = useState(defaultValues);

  function onSubmit() {
    const orientation = list.find((item) => item.selected)?.label;
    dispatch(
      setSexualOrientation({
        isShown: false,
        value: orientation,
      })
    );
    dispatch(setNextStep(8));
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
      <Button title="Continue" onPress={onSubmit} disabled={!list.some((item) => item.selected)} />
    </View>
  );
}
