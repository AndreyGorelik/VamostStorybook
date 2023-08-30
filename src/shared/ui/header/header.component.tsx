import { Logo } from '@assets/icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import { createStyles } from './header.styles';
import { HeaderProps } from './header.types';

export default function Header({ headerLeft, headerRight }: HeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <View style={styles.left}>{headerLeft}</View>
      <View style={styles.logo}>
        <Logo />
      </View>
      <View style={styles.right}>{headerRight}</View>
    </View>
  );
}
