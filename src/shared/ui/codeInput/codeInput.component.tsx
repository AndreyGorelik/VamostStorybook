import { Input } from '@shared/ui/input';
import { useCallback, useEffect, useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

import { createStyles } from './codeInput.styles';
import { CodeInputProps } from './codeInput.types';

export default function CodeInput({ onChange }: CodeInputProps) {
  const digit1 = useRef<TextInput>(null);
  const digit2 = useRef<TextInput>(null);
  const digit3 = useRef<TextInput>(null);
  const digit4 = useRef<TextInput>(null);
  const digit5 = useRef<TextInput>(null);
  const digit6 = useRef<TextInput>(null);
  const styles = createStyles();

  const { control, watch } = useForm({
    defaultValues: {
      digit1: '',
      digit2: '',
      digit3: '',
      digit4: '',
      digit5: '',
      digit6: '',
    },
  });
  const watchedValues = watch();

  useEffect(() => {
    onChange?.(Object.values(watchedValues).join(''));
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
        name="digit1"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit1}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, digit2))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />
      <Controller
        control={control}
        name="digit2"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit2}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, digit3, digit1))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />

      <Controller
        control={control}
        name="digit3"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit3}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, digit4, digit2))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />

      <Controller
        control={control}
        name="digit4"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit4}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, digit5, digit3))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />

      <Controller
        control={control}
        name="digit5"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit5}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, digit6, digit4))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />

      <Controller
        control={control}
        rules={{
          maxLength: 1,
        }}
        name="digit6"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit6}
            placeholder="."
            value={value}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              onChange(handleKeyPress(e, undefined, digit5))
            }
            keyboardType="numeric"
            onBlur={onBlur}
            maxLength={1}
          />
        )}
      />
    </View>
  );
}
