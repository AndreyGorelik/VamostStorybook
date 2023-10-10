import useTheme from '@shared/hooks/useTheme.hook';
import { useCallback, useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  View,
  Text,
  TextInput,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from 'react-native';

import { Input } from '../input';

import { createStyles } from './birthdayInput.styles';
import { BirthdayInputProps, BirthdayValues } from './birthdayInput.types';

export default function BirthdayInput({ onChange, errors, savedValues }: BirthdayInputProps) {
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

  const { control, watch } = useForm<BirthdayValues>({
    defaultValues: savedValues || {
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
  const watchedValues = watch();

  useEffect(() => {
    const data = Object.values(watchedValues);

    const day = data[2] + data[3];
    const month = data[0] + data[1];
    const year = data[4] + data[5] + data[6] + data[7];

    onChange?.(`${day},${month},${year}`);
  }, [onChange, watchedValues]);

  const handleKeyPress = useCallback(
    (
      e: NativeSyntheticEvent<TextInputKeyPressEventData>,
      nextInputRef?: React.RefObject<TextInput>,
      prevInputRef?: React.RefObject<TextInput>
    ) => {
      if (e.nativeEvent.key === 'Backspace') {
        prevInputRef?.current?.focus();
        return '';
      } else {
        const cleanedKey = e.nativeEvent.key.replace(/[^0-9]/g, '');
        if (cleanedKey.length === 0) return '';

        nextInputRef?.current?.focus();
        return cleanedKey;
      }
    },
    []
  );

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
            keyboardType="numeric"
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, month2InputRef))
            }
            onBlur={onBlur}
            error={errors?.month}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, day1InputRef, month1InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.month}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, day2InputRef, month2InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.day}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, year1InputRef, day1InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.day}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, year2InputRef, day2InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, year3InputRef, year1InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, year4InputRef, year2InputRef))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            error={errors?.year}
            maxLength={1}
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
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, undefined, year3InputRef))
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
