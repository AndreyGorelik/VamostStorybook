import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import Text from '@shared/ui/text/text.component';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';
import { registerEmailAction, setNextStep } from 'src/store/slices/auth.slice';

import { createStyles } from './email.styles';

export default function Email() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.authSlice);
  const { email } = useAppSelector((state) => state.userSlice);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: email || '',
    },
  });

  function onSubmit(data: { email: string }) {
    if (email === data.email) {
      dispatch(setNextStep());
    }

    dispatch(registerEmailAction({ email: data.email.toLowerCase() }));
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
