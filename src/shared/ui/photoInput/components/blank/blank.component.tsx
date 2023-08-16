import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, PressableStateCallbackType } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import useTheme from '../../../../hooks/useTheme.hook';

import { createStyles } from './blank.styles';
import { BlankProps } from './blank.types';

export default function Blank({ pickImage }: BlankProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
      <Pressable
        style={({ pressed }: PressableStateCallbackType) => [
          styles.wrapper,
          { backgroundColor: pressed ? theme.colors.placeholder : theme.colors.imagePlaceholder },
        ]}
        onPress={pickImage}
      >
        <MaterialIcons name="add" size={30} color={theme.colors.textDisabled} />
      </Pressable>
    </Animated.View>
  );
}
