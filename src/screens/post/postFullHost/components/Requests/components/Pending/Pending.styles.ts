import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    contentWrapper: {
      paddingVertical: 10,
      height: '100%',
    },
  });
