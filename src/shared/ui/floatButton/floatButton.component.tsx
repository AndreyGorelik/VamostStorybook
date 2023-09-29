import { AntDesign } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { TouchableOpacity } from 'react-native';

import { createStyles } from './floatButton.styles';
import { FloatButtonProps } from './floatButton.types';

export default function FloatButton({ onPress }: FloatButtonProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <TouchableOpacity style={styles.floatButton} activeOpacity={0.95} onPress={onPress}>
      <AntDesign name="pluscircle" size={50} color={theme.colors.selected} />
    </TouchableOpacity>
  );
}
