import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { BirthdayInput } from '@shared/ui/birthdayInput';
import { BirthdayErrors } from '@shared/ui/birthdayInput/birthdayInput.types';
import { Button } from '@shared/ui/button';
import Text from '@shared/ui/text/text.component';
import { validateDate } from '@shared/utils/dateValidate';
import { getSavedBirthday } from '@shared/utils/getSavedBirthday';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { registerBirthDateAction, setNextStep } from 'src/store/slices/auth.slice';

import { createStyles } from './birthday.styles';

export default function Birthday() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { birthdate } = useAppSelector((state) => state.userSlice);
  const { isLoading, error } = useAppSelector((state) => state.authSlice);

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
      birthday: birthdate || '',
    },
  });

  function onSubmit(value: { birthday: string }) {
    const [day, month, year] = value.birthday.split(',');
    const newErrors = validateDate(+day, +month, +year);
    const formattedDate = `${year}-${month}-${day}`;
    if (Object.values(newErrors).some((value) => value === true)) {
      setErrors(newErrors);
      return;
    }

    if (birthdate === formattedDate) {
      dispatch(setNextStep());
    }
    dispatch(registerBirthDateAction({ birthDate: formattedDate }));
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
            <BirthdayInput
              errors={errors}
              onChange={onChange}
              savedValues={birthdate ? getSavedBirthday(birthdate) : null}
            />
          )}
        />
        {error && <Text variant="warning">{error}</Text>}
      </View>
      <Button
        title="Continue"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isLoading}
      />
    </View>
  );
}
