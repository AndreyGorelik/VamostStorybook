import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 10,
    },
    headerPhoto: {
      width: '100%',
      maxHeight: 200,
      borderRadius: 10,
    },
  });
