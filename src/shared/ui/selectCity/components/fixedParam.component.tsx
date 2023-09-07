import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import Text from '@shared/ui/text/text.component';
import { Pressable } from 'react-native';

import { createStyles } from './fixedParam.styles';
import { FixedParamProps } from './fixedParam.types';

export default function FixedParam({ onPress, name }: FixedParamProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Pressable onPress={onPress} style={styles.wrapper}>
      <MaterialIcons name="close" size={16} color={theme.colors.text} />
      <Text variant="common">{name}</Text>
    </Pressable>
  );
}
