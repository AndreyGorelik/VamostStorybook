import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    errorText: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
