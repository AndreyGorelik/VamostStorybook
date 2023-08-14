import { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import { Input } from '../input';

import { createStyles } from './birthdayInput.styles';
import { BirthdayInputProps } from './birthdayInput.types';

export default function BirthdayInput({ confirm }: BirthdayInputProps) {
  const [day1, setDay1] = useState('');
  const [day2, setDay2] = useState('');
  const [month1, setMonth1] = useState('');
  const [month2, setMonth2] = useState('');
  const [year1, setYear1] = useState('');
  const [year2, setYear2] = useState('');
  const [year3, setYear3] = useState('');
  const [year4, setYear4] = useState('');
  const day1InputRef = useRef<TextInput>(null);
  const day2InputRef = useRef<TextInput>(null);
  const month1InputRef = useRef<TextInput>(null);
  const month2InputRef = useRef<TextInput>(null);
  const year1InputRef = useRef<TextInput>(null);
  const year2InputRef = useRef<TextInput>(null);
  const year3InputRef = useRef<TextInput>(null);
  const year4InputRef = useRef<TextInput>(null);
  const theme = useTheme();
  const styles = createStyles(theme);

  const handleInput = (inputValue: string, nextInputRef?: React.RefObject<TextInput>) => {
    if (inputValue.length >= 1) {
      nextInputRef?.current?.focus();
      return inputValue.slice(inputValue.length - 1);
    }
    return '';
  };

  const handleBack = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    prevInputRef: React.RefObject<TextInput>
  ) => {
    if (e.nativeEvent.key === 'Backspace') {
      prevInputRef.current?.focus();
    }
  };

  return (
    <View style={styles.wrapper}>
      <Input
        ref={month1InputRef}
        placeholder="M"
        value={month1}
        onChangeText={(text: string) => setMonth1(handleInput(text, month2InputRef))}
        keyboardType="numeric"
      />
      <Input
        ref={month2InputRef}
        placeholder="M"
        value={month2}
        onChangeText={(text: string) => setMonth2(handleInput(text, day1InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, month1InputRef)
        }
        keyboardType="numeric"
      />
      <Text style={styles.separator}> / </Text>
      <Input
        ref={day1InputRef}
        placeholder="D"
        value={day1}
        onChangeText={(text: string) => setDay1(handleInput(text, day2InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, month2InputRef)
        }
        keyboardType="numeric"
      />
      <Input
        ref={day2InputRef}
        placeholder="D"
        value={day2}
        onChangeText={(text: string) => setDay2(handleInput(text, year1InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, day1InputRef)
        }
        keyboardType="numeric"
      />
      <Text style={styles.separator}> / </Text>

      <Input
        ref={year1InputRef}
        placeholder="Y"
        value={year1}
        onChangeText={(text: string) => setYear1(handleInput(text, year2InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, day2InputRef)
        }
        keyboardType="numeric"
      />
      <Input
        ref={year2InputRef}
        placeholder="Y"
        value={year2}
        onChangeText={(text: string) => setYear2(handleInput(text, year3InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, year1InputRef)
        }
        keyboardType="numeric"
      />
      <Input
        ref={year3InputRef}
        placeholder="Y"
        value={year3}
        onChangeText={(text: string) => setYear3(handleInput(text, year4InputRef))}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, year2InputRef)
        }
        keyboardType="numeric"
      />
      <Input
        ref={year4InputRef}
        placeholder="Y"
        value={year4}
        maxLength={1}
        onChangeText={(text: string) => setYear4(text)}
        onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
          handleBack(e, year3InputRef)
        }
        keyboardType="numeric"
      />
    </View>
  );
}
