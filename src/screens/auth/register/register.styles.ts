import { StyleSheet } from 'react-native';

import { Theme } from '../../../shared/hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });