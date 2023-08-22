import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import { Input } from '../../../../../../shared/ui/input';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './email.styles';
import { EmailProps } from './email.types';

export default function Code({ goAhead }: EmailProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  function onSubmit() {
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        What&apos;s your email?
      </Text>
      <View style={styles.loose}>
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
      </View>
      <Button title="Continue" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
