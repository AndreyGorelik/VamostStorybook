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

import { ORIENTATION_OPTIONS } from './orientation.data';
import { createStyles } from './orientation.styles';

export default function Orientation() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const { sexualOrientation } = useAppSelector((state) => state.userSlice);

  const [selected, setSelected] = useState(sexualOrientation?.value ?? '');
  const [showMyOrientation, setShowMyOrientation] = useState(sexualOrientation?.isShown === true);

  function onSubmit() {
    dispatch(
      setSexualOrientation({
        isShown: showMyOrientation,
        value: selected,
      })
    );
    dispatch(setNextStep());
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">{'My sexual \norientation is'}</Text>

      <View style={styles.content}>
        <SelectList
          listOptions={ORIENTATION_OPTIONS}
          selected={selected}
          setSelected={setSelected}
          variant="textList"
        />
      </View>
      <View style={styles.checkBoxContainer}>
        <CheckBox
          value={showMyOrientation}
          onChange={setShowMyOrientation}
          label="Show my orientation on my profile"
        />
      </View>
      <Button title="Continue" onPress={onSubmit} disabled={!selected} loading={isLoading} />
    </View>
  );
}
