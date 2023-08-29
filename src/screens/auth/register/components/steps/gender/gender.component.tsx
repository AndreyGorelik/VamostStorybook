import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { SelectList } from '@shared/ui/selectList';
import Text from '@shared/ui/text/text.component';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';

import { ORIENTATION_RADIO_DATA_WITH_OPTIONS } from './gender.data';
import { createStyles } from './gender.styles';
import { GenderProps, SelectListData, SelectListItem } from './gender.types';

export default function Gender({ goAhead }: GenderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const defaultValues: SelectListData = ORIENTATION_RADIO_DATA_WITH_OPTIONS?.map(
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
      <Text variant="h2">I&apos;m a...</Text>

      <View style={styles.content}>
        <SelectList
          list={list}
          setList={setList}
          maxSelectCount={1}
          moreOption={true}
          moreAction={onSubmit}
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
