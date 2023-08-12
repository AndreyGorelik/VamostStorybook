import { useRef } from 'react';
import { TextInput as NativeTextInput, View } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';

import { createStyles } from './input.styles';

interface TextInputCustom {
  placeholder: string;
  value: string;
  [x: string]: unknown;
}

type focusAndBlur = 'focus' | 'blur';

const ANIMATION_DURATION = 150;

const TextInput = ({ placeholder, value, ...rest }: TextInputCustom) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const inputRef = useRef<NativeTextInput>(null);
  const top = useSharedValue(value ? -10 : 15);
  const labelFontSize = useSharedValue(value ? 12 : 17);
  const movePlaceholder = (status: focusAndBlur) => {
    if (status === 'focus') {
      top.value = withTiming(-10, { duration: ANIMATION_DURATION });
      labelFontSize.value = withTiming(12, { duration: ANIMATION_DURATION });
    } else {
      if (!value) {
        top.value = withTiming(15, { duration: ANIMATION_DURATION });
        labelFontSize.value = withTiming(17, { duration: ANIMATION_DURATION });
      }
    }
  };

  const reanimatedStyle = useAnimatedStyle(() => {
    return {
      top: top.value,
    };
  }, []);

  const textReanimatedStyle = useAnimatedStyle(() => {
    return {
      fontSize: labelFontSize.value,
    };
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.placeholder, reanimatedStyle]}>
        <Animated.Text style={[styles.text, textReanimatedStyle]}>{placeholder}</Animated.Text>
      </Animated.View>
      <NativeTextInput
        onFocus={() => movePlaceholder('focus')}
        onBlur={() => movePlaceholder('blur')}
        ref={inputRef}
        value={value}
        style={styles.input}
        placeholderTextColor={'white'}
        {...rest}
      />
    </View>
  );
};

export default TextInput;
