import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme, axis: 'height' | 'width') =>
  StyleSheet.create({
    wrapper: { [axis]: '100%', aspectRatio: 1 },
    image: { width: '100%', height: '100%', borderRadius: 16 },
  });
