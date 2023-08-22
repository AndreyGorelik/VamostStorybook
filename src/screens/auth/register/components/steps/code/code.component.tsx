import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import { Input } from '../../../../../../shared/ui/input';
import { PhoneInput } from '../../../../../../shared/ui/phoneInput';
import Text from '../../../../../../shared/ui/text/text.component';

import { createStyles } from './code.styles';
import { CodeProps } from './code.types';
import { CodeInput } from '../../../../../../shared/ui/codeInput';

export default function Code({ goAhead, number }: CodeProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const {
    control,
    handleSubmit,
    watch,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      code: '',
    },
  });

  function onSubmit() {
    console.log(watch());
    goAhead();
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        Enter the 6-digit code sent to you at
      </Text>
      <Text variant="h2" color={theme.colors.selected}>
        {number}
      </Text>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="code"
          render={({ field: { onChange } }) => <CodeInput onChange={onChange} />}
        />
      </View>
      <View style={styles.agreement}>
        <Text variant="small" align="center">
          Didn&apos;t get a code? Send over
        </Text>
      </View>
      <Button title="Sign up" onPress={handleSubmit(onSubmit)} disabled={!isValid} />
    </View>
  );
}
