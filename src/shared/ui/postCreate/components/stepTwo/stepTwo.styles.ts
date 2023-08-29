import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      gap: 10,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    textLink: {
      color: theme.colors.darkBlue,
    },
  });
