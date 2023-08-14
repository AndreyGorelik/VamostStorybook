import { forwardRef } from 'react';
import { TextInput as NativeTextInput, View } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolateColor,
} from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';

import { ANIMATION_DURATION } from './input.data';
import { createStyles } from './input.styles';
import { TextInputCustom, focusAndBlur } from './input.types';

const AnimatedInput = Animated.createAnimatedComponent(NativeTextInput);

const TextInput = forwardRef<NativeTextInput, TextInputCustom>(
  ({ placeholder, value, onChangeText, ...rest }, ref) => {
    const theme = useTheme();
    const styles = createStyles(theme, placeholder);
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
        borderColor,
      };
    }, []);

    return (
      <View style={styles.container}>
        <Animated.View style={[styles.placeholder, reanimatedStyle]}>
          <Animated.Text style={[styles.text, textReanimatedStyle]}>{placeholder}</Animated.Text>
        </Animated.View>
        <AnimatedInput
          onFocus={() => movePlaceholder('focus')}
          onBlur={() => movePlaceholder('blur')}
          ref={ref}
          value={value}
          onChangeText={onChangeText}
          style={[styles.input, borderReanimatedStyle]}
          placeholderTextColor={'white'}
          {...rest}
        />
      </View>
    );
  }
);

TextInput.displayName = 'TextInput';

export default TextInput;
