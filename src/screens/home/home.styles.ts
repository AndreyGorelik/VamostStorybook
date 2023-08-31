import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    header: {
      rowGap: 20,
      paddingBottom: 10,
    },
    today: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    viewAll: {
      flexDirection: 'row',
      columnGap: 5,
    },
    filter: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 10,
      paddingLeft: 10,
    },
  });
