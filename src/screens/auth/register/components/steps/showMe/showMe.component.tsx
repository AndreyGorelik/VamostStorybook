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

export default function ShowMe() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const { birthdate, gender, sexualOrientation, shownGender } = useAppSelector(
    (state) => state.userSlice
  );
  const [selected, setSelected] = useState(shownGender ? shownGender : '');
  function onSubmit() {
    const shownGender = selected;

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
        <SelectList
          listOptions={ORIENTATION_RADIO_DATA}
          selected={selected}
          setSelected={setSelected}
          variant="buttonsList"
        />
      </View>
      <Button title="Continue" onPress={onSubmit} disabled={!selected} loading={isLoading} />
    </View>
  );
}
