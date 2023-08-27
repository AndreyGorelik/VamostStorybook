import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
    },
    userpic: {
      borderRadius: 100,
      borderWidth: 3,
      borderColor: theme.colors.background,
    },
  });
