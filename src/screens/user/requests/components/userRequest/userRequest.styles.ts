import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      padding: 15,
      borderRadius: 15,
      backgroundColor: theme.colors.background,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    Approve: {
      color: theme.colors.selected,
    },
    New: {
      color: theme.colors.lightText,
    },
    Rejected: {
      color: theme.colors.red,
    },
  });
