import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    label: {
      flexDirection: 'row',
      backgroundColor: theme.colors.secondRed,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      borderRadius: 100,
      padding: 5,
      width: '50%',
    },
  });
