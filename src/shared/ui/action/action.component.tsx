import useTheme from '@shared/hooks/useTheme.hook';
import { Text, Pressable } from 'react-native';

import { createStyles } from './action.styles';
import { ActionProps } from './action.types';

export default function Action({ Icon, title, onPress }: ActionProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  return (
    <Pressable
      style={({ pressed }) => [
        styles.wrapper,
        {
          opacity: pressed ? 0.9 : 1,
        },
      ]}
      onPress={onPress}
    >
      {Icon}
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
}
