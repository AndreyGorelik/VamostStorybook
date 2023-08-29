import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { registerEmail } from 'src/store/slices/authSlice';

import { createStyles } from './email.styles';
import { EmailProps } from './email.types';

export default function Email({ goAhead }: EmailProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { emailError } = useAppSelector((state) => state.errorsSlice);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: { email: string }) {
    dispatch(registerEmail(data));
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">What&apos;s your email?</Text>
      <View style={styles.subInfo}>
        <Text variant="common" fontSize={17}>
          Don&apos;t loose access to your account, verify your email.
        </Text>
      </View>

      <View style={styles.content}>
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: {
              value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,

              message: 'Invalid email',
            },
          }}
          name="email"
          render={({ field: { onChange, onBlur, value } }) => (
            <Input
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              placeholder="Enter your email address"
            />
          )}
        />
        {emailError && <Text variant="warning">{emailError}</Text>}
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
