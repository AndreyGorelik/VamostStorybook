import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 10,
    },
    listWrapper: {
      backgroundColor: theme.colors.background,
    },
    listContainer: {
      padding: 10,
      rowGap: 10,
    },
  });
