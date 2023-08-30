import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { TouchableOpacity } from 'react-native';

import Text from '../text/text.component';

import { createStyles } from './outlinedBtn.styles';
import { OutlinedBtnProps } from './outlinedBtn.types';

export default function OutlinedButton({
  title,
  width,
  height,
  onPress,
  disabled,
  selected,
  color,
  icon,
  borderRadius,
  fontSize,
  flex,
}: OutlinedBtnProps) {
  const handlePress = () => {
    onPress?.();
  };

  const theme = useTheme();

  const styles = createStyles({
    theme: theme,
    disabled,
    selected,
    width,
    height,
    color,
    borderRadius,
    fontSize,
    flex,
  });

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
      {icon && <MaterialIcons name={icon} size={30} style={styles.icon} />}
    </TouchableOpacity>
  );
}
