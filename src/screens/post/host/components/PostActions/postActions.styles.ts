import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    actionButtons: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
    },

    actionBtn: {
      borderRadius: 20,
      height: 40,
      fontSize: 14,
      flex: 1,
    },
  });
