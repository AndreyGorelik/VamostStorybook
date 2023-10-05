import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    flex: {
      flex: 1,
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      right: 10,
      top: 10,
      zIndex: 999,
    },
  });
