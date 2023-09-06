import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { PhoneInput } from '@shared/ui/phoneInput';
import Text from '@shared/ui/text/text.component';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, View } from 'react-native';
import { registerUser } from 'src/store/slices/authSlice';

import { createStyles } from './phoneAndPass.styles';
import { PhoneAndPassProps } from './phoneAndPass.types';

export default function PhoneAndPass({ setNumber }: PhoneAndPassProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secure, setSecure] = useState<boolean>(true);
  const dispatch = useAppDispatch();
  const { phoneNumberError } = useAppSelector((state) => state.errorsSlice);
  const { isLoading } = useAppSelector((state) => state.authSlice);
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: {
      phoneNumber: '',
      password: '',
    },
  });

  function onSubmit(value: { phoneNumber: string; password: string }) {
    dispatch(registerUser(value));
    setNumber(value.phoneNumber);
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2">Welcome! Let&apos;s create your account</Text>
      <View style={styles.content}>
        <Controller
          control={control}
          rules={{ required: true }}
          name="phoneNumber"
          render={({ field: { onChange, value } }) => (
            <PhoneInput setNumber={onChange} value={value} />
          )}
        />
        <Controller
          control={control}
          rules={{ required: true, minLength: 8 }}
          name="password"
          render={({ field: { onBlur, onChange, value } }) => (
            <Input
              placeholder="Enter your password"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={secure}
              rightIcon={
                <Pressable
                  onPress={() => setSecure(!secure)}
                  style={({ pressed }) => [
                    styles.pressable,
                    {
                      opacity: pressed ? 0.6 : 1,
                    },
                  ]}
                >
                  <Ionicons
                    name={secure ? 'eye' : 'eye-off'}
                    size={24}
                    color={theme.colors.placeholder}
                  />
                </Pressable>
              }
            />
          )}
        />
        {phoneNumberError && <Text variant="warning">{phoneNumberError}</Text>}

        <View style={styles.agreement}>
          <Text variant="small" align="center">
            We will send you a text with a verification code. Message and data rates may apply.
          </Text>
          <View style={styles.accept}>
            <Text variant="small" align="center">
              By signing up you accept the
            </Text>
            <Text variant="small" color={theme.colors.selected}>
              Terms of Service
            </Text>
            <Text variant="small" align="center">
              and
            </Text>
            <Text variant="small" color={theme.colors.selected}>
              Privacy Policy
            </Text>
          </View>
        </View>
      </View>

      <Button
        title="Sign up"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isLoading}
      />
    </View>
  );
}
