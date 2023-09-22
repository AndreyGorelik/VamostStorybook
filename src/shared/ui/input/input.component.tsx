import useTheme from '@shared/hooks/useTheme.hook';
import { forwardRef } from 'react';
import { GestureResponderEvent, TextInput as NativeTextInput, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import { ANIMATION_DURATION } from './input.data';
import { createStyles } from './input.styles';
import { InputProps, focusAndBlur } from './input.types';

const AnimatedInput = Animated.createAnimatedComponent(NativeTextInput);

const TextInput = forwardRef<NativeTextInput, InputProps>(
  (
    {
      placeholder,
      value,
      onChangeText,
      onBlur,
      onFocus,
      fontSize,
      error,
      rightIcon,
      noGap,
      ...rest
    },
    ref
  ) => {
    const theme = useTheme();
    const styles = createStyles(theme, placeholder || '', fontSize, error);
    const top = useSharedValue(value ? -10 : 15);
    const labelFontSize = useSharedValue(value ? 12 : 17);
    const progress = useSharedValue(value ? 1 : 0);
    const movePlaceholder = (status: focusAndBlur) => {
      if (status === 'focus') {
        top.value = withTiming(-10, { duration: ANIMATION_DURATION });
        labelFontSize.value = withTiming(12, { duration: ANIMATION_DURATION });
        progress.value = withTiming(1, { duration: ANIMATION_DURATION });
      } else {
        if (!value) {
          top.value = withTiming(15, { duration: ANIMATION_DURATION });
          labelFontSize.value = withTiming(17, { duration: ANIMATION_DURATION });
          progress.value = withTiming(0, { duration: ANIMATION_DURATION });
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

    const borderReanimatedStyle = useAnimatedStyle(() => {
      const borderColor = interpolateColor(
        progress.value,
        [0, 1],
        [theme.colors.placeholder, theme.colors.primary]
      );

      return {
        borderColor: borderColor,
      };
    }, []);

    return (
      <View style={[styles.container, { marginVertical: noGap ? 0 : 10 }]}>
        <Animated.View style={[styles.placeholder, reanimatedStyle]}>
          <Animated.Text style={[styles.text, textReanimatedStyle]}>{placeholder}</Animated.Text>
        </Animated.View>
        <Animated.View
          style={[styles.inputWrapper, [error ? styles.error : borderReanimatedStyle]]}
          onTouchStart={(e: GestureResponderEvent) => {
            e.stopPropagation();
          }}
        >
          <AnimatedInput
            onFocus={(e) => {
              onFocus?.(e);
              movePlaceholder('focus');
            }}
            onBlur={(e) => {
              onBlur?.(e);
              movePlaceholder('blur');
            }}
            ref={ref}
            value={value}
            onChangeText={onChangeText}
            style={[styles.input, { paddingVertical: noGap ? 0 : 10 }]}
            placeholderTextColor={'white'}
            {...rest}
          />
          {rightIcon && rightIcon}
        </Animated.View>
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
