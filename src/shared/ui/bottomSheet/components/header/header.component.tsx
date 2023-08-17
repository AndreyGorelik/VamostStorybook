import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { View, Pressable } from 'react-native';

import useTheme from '../../../../hooks/useTheme.hook';
import Text from '../../../text/text.component';

import { createStyles } from './header.styles';
import { HeaderProps } from './header.types';

export default function Header({
  title,
  leftIconName,
  leftIconPress,
  rightIconName,
  rightIconPress,
}: HeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <Pressable style={styles.leftIcon} onPress={leftIconPress}>
        <MaterialIcons name={leftIconName} size={24} />
      </Pressable>

      <Text variant="h3" {...styles.headerText}>
        {title}
      </Text>
      <Pressable style={styles.rightIcon} onPress={rightIconPress}>
        <MaterialIcons name={rightIconName} size={24} />
      </Pressable>
    </View>
  );
}
