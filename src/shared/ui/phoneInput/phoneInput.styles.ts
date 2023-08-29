import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      paddingBottom: theme.styleConstants.padding.medium,
      borderBottomWidth: 1,
    },
  });
