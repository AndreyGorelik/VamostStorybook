import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { CheckBox } from '@shared/ui/checkBox';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { View } from 'react-native';
import { setNextStep } from 'src/store/slices/auth.slice';
import { setGender } from 'src/store/slices/user.slice';

import { GENDER_OPTIONS } from './gender.data';
import { createStyles } from './gender.styles';

export default function Gender() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const { gender } = useAppSelector((state) => state.userSlice);

  const [selected, setSelected] = useState(gender?.value ?? '');
  const [showMyGender, setShowMyGender] = useState(gender?.isShown === true);

  function onSubmit() {
    dispatch(
      setGender({
        isShown: showMyGender,
        value: selected,
      })
    );
    dispatch(setNextStep());
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">I&apos;m a...</Text>

      <View style={styles.content}>
        <SelectList
          listOptions={GENDER_OPTIONS}
          selected={selected}
          setSelected={setSelected}
          variant="buttonsList"
        />
        <CheckBox
          value={showMyGender}
          onChange={setShowMyGender}
          label="Show my gender on my profile"
        />
      </View>
      <Button title="Continue" onPress={onSubmit} disabled={!selected} loading={isLoading} />
    </View>
  );
}
