import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Header } from '@shared/ui/header';
import { removeTokens } from '@shared/utils/removeTokens';
import { useNavigation, Link } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { logoutUser, setPrevStep, setStep } from 'src/store/slices/authSlice';
import { initialState, setUser } from 'src/store/slices/userSlice';

import { Birthday } from './components/steps/birthday';
import { Code } from './components/steps/code';
import { Email } from './components/steps/email';
import { Gender } from './components/steps/gender';
import { Nickname } from './components/steps/nickname';
import { Orientation } from './components/steps/orientation';
import { PhoneAndPass } from './components/steps/phoneAndPass';
import { Photos } from './components/steps/photos';
import { ShowMe } from './components/steps/showMe';
import { createStyles } from './register.styles';

const RegisterScreen = () => {
  const [number, setNumber] = useState<string>('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { step } = useAppSelector((state) => state.authSlice);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          headerLeft={
            step === 1 ? (
              <Link href="/login">Sign in</Link>
            ) : (
              <Pressable
                onPress={() => {
                  if (step <= 2) {
                    dispatch(setUser(initialState));
                    dispatch(logoutUser());
                    removeTokens();
                  }
                  dispatch(setPrevStep());
                }}
              >
                <MaterialIcons name="arrow-back" size={24} color={theme.colors.primary} />
              </Pressable>
            )
          }
          headerRight={
            <Pressable
              onPress={() => {
                dispatch(setUser(initialState));
                dispatch(logoutUser());
                removeTokens();
                dispatch(setStep(1));
              }}
            >
              <MaterialIcons name="close" size={24} color={theme.colors.primary} />
            </Pressable>
          }
        />
      ),
    });
  }, [dispatch, navigation, step, theme.colors.primary]);

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onTouchStart={() => Keyboard.dismiss()}
    >
      {step <= 1 && <PhoneAndPass setNumber={setNumber} />}
      {step === 2 && <Code number={number} />}
      {step === 3 && <Email />}
      {step === 4 && <Nickname />}
      {step === 5 && <Birthday />}
      {step === 6 && <Gender />}
      {step === 7 && <Orientation />}
      {step === 8 && <ShowMe />}
      {step === 9 && <Photos />}
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
