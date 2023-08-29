import useTheme from '@shared/hooks/useTheme.hook';
import { BirthdayInput } from '@shared/ui/birthdayInput';
import { BirthdayErrors } from '@shared/ui/birthdayInput/birthdayInput.types';
import { Button } from '@shared/ui/button';
import Text from '@shared/ui/text/text.component';
import { validateDate } from '@shared/utils/dateValidate';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import { createStyles } from './birthday.styles';
import { BirthdayProps } from './birthday.types';

export default function Birthday({ goAhead }: BirthdayProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [errors, setErrors] = useState<BirthdayErrors>({
    month: false,
    day: false,
    year: false,
  });

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      birthday: '',
    },
  });

  function onSubmit(value: { birthday: string }) {
    const [day, month, year] = value.birthday.split(',');
    const newErrors = validateDate(+day, +month, +year);

    if (Object.values(newErrors).some((value) => value === true)) {
      setErrors(newErrors);
      return;
    }

    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">My birthday is...</Text>
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
          render={({ field: { onChange } }) => (
            <BirthdayInput errors={errors} onChange={onChange} />
          )}
        />
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
