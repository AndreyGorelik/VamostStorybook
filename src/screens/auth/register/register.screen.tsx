import { useState } from 'react';
import { View } from 'react-native';

import useTheme from '../../../shared/hooks/useTheme.hook';

import { createStyles } from './register.styles';
import { PhoneAndPass } from './components/steps/phoneAndPass';
import { Code } from './components/steps/code';

const RegisterScreen = () => {
  const [step, setStep] = useState(1);
  const [number, setNumber] = useState('');
  const theme = useTheme();
  const styles = createStyles(theme);

  function goAhead() {
    setStep(step + 1);
  }

  return (
    <View style={styles.wrapper}>
      {step === 1 && <PhoneAndPass goAhead={goAhead} setNumber={setNumber} />}
      {step === 2 && <Code goAhead={goAhead} number={number} />}
    </View>
  );
};

export default RegisterScreen;
