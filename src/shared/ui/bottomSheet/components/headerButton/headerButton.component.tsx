import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import React from 'react';
import { View, Pressable } from 'react-native';

import { createStyles } from './headerButton.styles';
import { HeaderButtonProps } from './headerButton.types';

export default function HeaderButton({
  onPress,
  icon,
  isBackground = false,
  variant,
  ...rest
}: HeaderButtonProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.icon,
        styles[variant],
        {
          opacity: pressed ? 0.8 : 1,
          top: isBackground ? 20 : 'auto',
        },
      ]}
      onPress={onPress}
      {...rest}
    >
      {isBackground && <View style={styles.background} />}
      <MaterialIcons name={icon} size={24} style={styles.iconWrapper} />
    </Pressable>
  );
}
