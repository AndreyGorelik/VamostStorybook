import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { ORIENTATION_MULTI_SELECT_DATA } from './orientation.data';
import { createStyles } from './orientation.styles';
import { OrientationProps, SelectListData, SelectListItem } from './orientation.types';

export default function Orientation({ goAhead }: OrientationProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const defaultValues: SelectListData = ORIENTATION_MULTI_SELECT_DATA?.map(
    (item: SelectListItem) => {
      return { ...item, selected: false };
    }
  );
  const [list, setList] = useState(defaultValues);

  const {
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  function onSubmit() {
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">{'My sexual \norientation is'}</Text>

      <View style={styles.content}>
        <SelectList
          list={list}
          setList={setList}
          maxSelectCount={3}
          textError="Maximum 3 orientations can be selected."
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
