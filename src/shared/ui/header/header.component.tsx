import { View } from 'react-native';

import { Logo } from '../../../assets/icons';
import useTheme from '../../hooks/useTheme.hook';

import { createStyles } from './header.styles';
import { HeaderProps } from './header.types';

export default function Header({ headerLeft, headerRight }: HeaderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.header}>
      <View style={{ flex: 1 }}>{headerLeft}</View>
      <View
        style={{
          height: 30,
          flex: 1,
          marginBottom: 3,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Logo />
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end' }}>{headerRight}</View>
    </View>
  );
}
