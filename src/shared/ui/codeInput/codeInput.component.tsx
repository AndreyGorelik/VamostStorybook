import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { View, TextInput, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';

import { Input } from '../input';

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

  //onChange && onChange(Object.values(watch()).join(','));

  const handleInput = (inputValue: string, nextInputRef?: React.RefObject<TextInput>) => {
    onChange?.(Object.values(watch()).join(','));
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
      <Controller
        control={control}
        name="digit1"
        render={({ field: { onBlur, onChange, value } }) => (
          <Input
            ref={digit1}
            placeholder="."
            value={value}
            onChangeText={(text: string) => onChange(handleInput(text, digit2))}
            keyboardType="numeric"
            onBlur={onBlur}
            fontSize={20}
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
            onChangeText={(text: string) => onChange(handleInput(text, digit3))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, digit1)
            }
            keyboardType="numeric"
            onBlur={onBlur}
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
            onChangeText={(text: string) => onChange(handleInput(text, digit4))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, digit2)
            }
            keyboardType="numeric"
            onBlur={onBlur}
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
            onChangeText={(text: string) => onChange(handleInput(text, digit5))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, digit3)
            }
            keyboardType="numeric"
            onBlur={onBlur}
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
            onChangeText={(text: string) => onChange(handleInput(text, digit6))}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, digit4)
            }
            keyboardType="numeric"
            onBlur={onBlur}
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
            onChangeText={(text: string) => {
              onChange(handleInput(text));
            }}
            onKeyPress={(e: NativeSyntheticEvent<TextInputKeyPressEventData>) =>
              handleBack(e, digit5)
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
