import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    separator: {
      fontSize: 20,
      color: theme.colors.placeholder,
    },
    wrapper: { flexDirection: 'row', columnGap: 10, alignItems: 'center' },
  });
