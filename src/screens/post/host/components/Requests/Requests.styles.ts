import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      marginTop: 20,
    },
    tab: {
      paddingVertical: 10,
      flex: 1,
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
    },
    selected: {
      fontWeight: '700',
    },
  });
