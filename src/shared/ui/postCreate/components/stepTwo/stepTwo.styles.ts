import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: 20,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    textLink: {
      color: theme.colors.darkBlue,
    },
    input: {
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
  });
