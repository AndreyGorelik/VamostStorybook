import { LinkProps } from 'expo-router/build/link/Link';
import { ReactElement } from 'react';
import { ButtonProps } from 'react-native';

export interface HeaderProps {
  headerLeft?: ReactElement<LinkProps | ButtonProps>;
  headerRight?: ReactElement<LinkProps | ButtonProps>;
}
