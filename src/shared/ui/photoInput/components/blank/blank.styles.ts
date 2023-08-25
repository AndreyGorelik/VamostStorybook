import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: '100%',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.styleConstants.borderRadius.big,
      backgroundColor: theme.colors.imagePlaceholder,
    },
  });
