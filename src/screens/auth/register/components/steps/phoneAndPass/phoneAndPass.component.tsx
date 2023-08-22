import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import { Input } from '../../../../../../shared/ui/input';
import { PhoneInput } from '../../../../../../shared/ui/phoneInput';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './phoneAndPass.styles';
import { PhoneAndPassProps } from './phoneAndPass.types';

export default function PhoneAndPass({ goAhead, setNumber }: PhoneAndPassProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secure, setSecure] = useState<boolean>(true);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      number: '',
      password: '',
    },
  });

  function onSubmit(value: { number: string; password: string }) {
    setNumber(value.number);
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        Welcome! Let&apos;s create your account
      </Text>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="number"
          render={({ field: { onChange, value } }) => (
            <PhoneInput setNumber={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true }}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Enter your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secure}
            />
          )}
        />
        <View style={styles.agreement}>
          <Text variant="small" align="center">
            We will send you a text with a verification code. Message and data rates may apply.
          </Text>
          <Text variant="small" align="center">
            By signing up you accept the Terms of Service and Privacy Policy
          </Text>
        </View>
      </View>

      <Button title="Sign up" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
