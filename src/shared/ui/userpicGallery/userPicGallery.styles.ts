import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

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
