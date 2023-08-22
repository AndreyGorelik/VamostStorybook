import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation, Link } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Pressable, View } from 'react-native';

import useTheme from '../../../shared/hooks/useTheme.hook';
import { Header } from '../../../shared/ui/header';

import { Code } from './components/steps/code';
import { PhoneAndPass } from './components/steps/phoneAndPass';
import { createStyles } from './register.styles';
import { Email } from './components/steps/email';

const RegisterScreen = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);
  const navigation = useNavigation();

  function goAhead() {
    setStep(step + 1);
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          headerLeft={
            step === 1 ? (
              <Link href="/login">Sign in</Link>
            ) : (
              <Pressable onPress={() => setStep(step - 1)}>
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
  }, [navigation, step]);

  return (
    <View style={styles.wrapper}>
      {step === 1 && <PhoneAndPass goAhead={goAhead} setNumber={setNumber} />}
      {step === 2 && <Code goAhead={goAhead} number={number} />}
      {step === 3 && <Email goAhead={goAhead} />}
    </View>
  );
};

export default RegisterScreen;
