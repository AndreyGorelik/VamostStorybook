import { MaterialIcons } from '@expo/vector-icons';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Header } from '@shared/ui/header';
import { useNavigation, Link } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable } from 'react-native';
import { setNextStep } from 'src/store/slices/authSlice';

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
  // const [step, setStep] = useState<number>(1);
  const [number, setNumber] = useState<string>('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const { step } = useAppSelector((state) => state.authSlice);
  // console.log('step', state);
  const state = useAppSelector((state) => state);
  console.log('STATE', state);

  function goAhead() {}

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          headerLeft={
            step === 1 ? (
              <Link href="/login">Sign in</Link>
            ) : (
              <Pressable onPress={() => dispatch(setNextStep(step - 1))}>
                <MaterialIcons name="arrow-back" size={24} color="black" />
              </Pressable>
            )
          }
          headerRight={
            <Pressable>
              <MaterialIcons name="close" size={24} color="black" />
            </Pressable>
          }
        />
      ),
    });
  }, [dispatch, navigation, step]);

  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      onTouchStart={() => Keyboard.dismiss()}
    >
      {step === 1 && <PhoneAndPass goAhead={goAhead} setNumber={setNumber} />}
      {step === 2 && <Code goAhead={goAhead} number={number} />}
      {step === 3 && <Email goAhead={goAhead} />}
      {step === 4 && <Nickname goAhead={goAhead} />}
      {step === 5 && <Birthday goAhead={goAhead} />}
      {step === 6 && <Gender goAhead={goAhead} />}
      {step === 7 && <Orientation goAhead={goAhead} />}
      {step === 8 && <ShowMe goAhead={goAhead} />}
      {step === 9 && <Photos goAhead={goAhead} />}
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;
