import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingBottom: theme.styleConstants.padding.big,
      borderBottomWidth: 1,
    },
  });
