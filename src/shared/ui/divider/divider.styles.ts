import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    divider: {
      width: '95%',
      height: 1,
      marginVertical: 15,
      borderRadius: 5,
      backgroundColor: theme.colors.divider,
      alignSelf: 'center',
    },
  });
