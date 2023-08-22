import { Keyboard, TouchableOpacity } from 'react-native';

import useTheme from '../../hooks/useTheme.hook';
import Text from '../text/text.component';

import { createStyles } from './button.styles';
import { CustomButton } from './button.types';

export default function Button({ title, width, onPress, disabled, color }: CustomButton) {
  const handlePress = () => {
    Keyboard.dismiss();
    onPress?.();
  };

  const theme = useTheme();

  const styles = createStyles({ theme, disabled, width, color });

  return (
    <TouchableOpacity
      disabled={disabled}
      accessible
      accessibilityRole="button"
      style={styles.button}
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Text variant="common" {...styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
