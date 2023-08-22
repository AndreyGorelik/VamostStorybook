import { LinkProps } from 'expo-router/build/link/Link';
import { ReactElement } from 'react';
import { View, ButtonProps } from 'react-native';

import { Logo } from '../../../assets/icons';
import useTheme from '../../hooks/useTheme.hook';

import { createStyles } from './header.styles';

export interface HeaderProps {
  headerLeft: ReactElement<LinkProps | ButtonProps>;
  headerRight: ReactElement<LinkProps | ButtonProps>;
}

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
