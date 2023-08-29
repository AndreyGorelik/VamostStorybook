import useTheme from '@shared/hooks/useTheme.hook';
import { ActivityIndicator, TouchableOpacity } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './button.styles';
import { CustomButton } from './button.types';

export default function Button({
  title,
  width,
  onPress,
  disabled,
  color,
  loading = false,
}: CustomButton) {
  const handlePress = () => {
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
      {loading ? (
        <ActivityIndicator size="small" color={styles.text.color} />
      ) : (
        <Text variant="common" {...styles.text}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
