import { Ionicons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { Input } from '@shared/ui/input';
import { PhoneInput } from '@shared/ui/phoneInput';
import Text from '@shared/ui/text/text.component';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, View } from 'react-native';
import { loginUserAction, setAuthError } from 'src/store/slices/auth.slice';
import { initialState, setUser } from 'src/store/slices/user.slice';

import { createStyles } from './login.styles';
import { LoginData } from './login.types';

export default function Login() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [secure, setSecure] = useState<boolean>(true);

  const dispatch = useAppDispatch();
  const { isLoading, error } = useAppSelector((state) => state.authSlice);
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

  useEffect(() => {
    dispatch(setAuthError(null));
  }, [dispatch]);

  function onSubmit(value: LoginData) {
    dispatch(setUser(initialState));
    dispatch(
      loginUserAction({
        ...value,
        phoneNumber: value.phoneNumber.replace(/[^\d+]/g, ''),
      })
    );
  }

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onTouchStart={() => Keyboard.dismiss()}
    >
      <Text variant="h2">Login to your account.</Text>
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
        {error && <Text variant="warning">{error}</Text>}
      </View>
      <Button
        title="Sign in"
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
        loading={isLoading}
      />
      <Pressable
        style={({ pressed }) => [
          styles.forgotPass,
          {
            opacity: pressed ? 0.6 : 1,
          },
        ]}
      >
        <Text variant="common" color={theme.colors.text}>
          Forgot password?
        </Text>
      </Pressable>
    </KeyboardAvoidingView>
  );
}
