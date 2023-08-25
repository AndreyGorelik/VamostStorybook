import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
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

export default function BirthdayInput({ onChange, errors }: BirthdayInputProps) {
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

  const { control, watch } = useForm({
    defaultValues: {
      month1: '',
      month2: '',
      day1: '',
      day2: '',
      year1: '',
      year2: '',
      year3: '',
      year4: '',
    },
  });

  const handleInput = (inputValue: string, nextInputRef?: React.RefObject<TextInput>) => {
    const data = [...Object.values(watch())].map((value) => (value === '' ? inputValue : value));

    const day = data[2] + data[3];
    const month = data[0] + data[1];
    const year = data[4] + data[5] + data[6] + data[7];

    onChange?.(`${day},${month},${year}`);
    if (inputValue.length >= 1) {
      const cleanedText = inputValue.replace(/[^0-9]/g, '');
      if (cleanedText.length === 0) return '';

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
      <Controller
        control={control}
        name="month1"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={month1InputRef}
            placeholder="M"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, month2InputRef))}
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.month}
          />
        )}
      />
      <Controller
        control={control}
        name="month2"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={month2InputRef}
            placeholder="M"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, day1InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, month1InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.month}
          />
        )}
      />
      <Text style={styles.separator}> / </Text>

      <Controller
        control={control}
        name="day1"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={day1InputRef}
            placeholder="D"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, day2InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, month2InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.day}
          />
        )}
      />

      <Controller
        control={control}
        name="day2"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={day2InputRef}
            placeholder="D"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, year1InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, day1InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.day}
          />
        )}
      />

      <Text style={styles.separator}> / </Text>
      <Controller
        control={control}
        name="year1"
        rules={{
          maxLength: 1,
        }}
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={year1InputRef}
            placeholder="Y"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, year2InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, day2InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
          />
        )}
      />

      <Controller
        control={control}
        name="year2"
        rules={{
          maxLength: 1,
        }}
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={year2InputRef}
            placeholder="Y"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, year3InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, year1InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          maxLength: 1,
        }}
        name="year3"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={year3InputRef}
            placeholder="Y"
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, year4InputRef))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, year2InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
          />
        )}
      />
      <Controller
        control={control}
        rules={{
          maxLength: 1,
        }}
        name="year4"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={year4InputRef}
            placeholder="Y"
            value={value}
            onChangeText={(text: string) => {
              onChange(handleInput(text));
            }}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, year3InputRef)
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
            error={errors?.year}
          />
        )}
      />
    </View>
  );
}
