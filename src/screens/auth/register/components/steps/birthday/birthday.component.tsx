import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { BirthdayInput } from '../../../../../../shared/ui/birthdayInput';
import { Button } from '../../../../../../shared/ui/button';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './birthday.styles';
import { BirthdayProps } from './birthday.types';

export default function Code({ goAhead }: BirthdayProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      birthday: '',
    },
  });

  function onSubmit() {
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        My birthday is...
      </Text>
      <View style={styles.subInfo}>
        <Text variant="common" fontSize={17}>
          Your age will be public.
        </Text>
      </View>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="birthday"
          render={({ field: { onChange } }) => <BirthdayInput onChange={onChange} />}
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
