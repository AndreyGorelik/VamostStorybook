import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 160,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.styleConstants.borderRadius.big,
      backgroundColor: theme.colors.imagePlaceholder,
    },
  });
