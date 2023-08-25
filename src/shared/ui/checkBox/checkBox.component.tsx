import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
  withSequence,
} from 'react-native-reanimated';

import useTheme from '../../hooks/useTheme.hook';
import Text from '../text/text.component';

import { createStyles } from './checkBox.styles';
import { CheckBoxProps } from './checkBox.types';

export default function CheckBox({ checked, setChecked, label }: CheckBoxProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const transformSize = useSharedValue(1);

  const toggleCheckbox = () => {
    transformSize.value = withSequence(withSpring(1.1), withSpring(1));
    setChecked(!checked);
  };

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: transformSize.value }],
    };
  });

  return (
    <TouchableOpacity
      accessible
      accessibilityRole="button"
      onPress={toggleCheckbox}
      style={styles.container}
      activeOpacity={0.8}
    >
      <Text>{label}</Text>
      <Animated.View style={animatedIconStyle}>
        {checked ? (
          <MaterialCommunityIcons
            name="checkbox-marked-circle-outline"
            size={25}
            color={theme.colors.button}
          />
        ) : (
          <MaterialCommunityIcons
            name="checkbox-blank-circle-outline"
            size={25}
            color={theme.colors.button}
          />
        )}
      </Animated.View>
    </TouchableOpacity>
  );
}
