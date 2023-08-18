import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    date: {
      color: theme.colors.lightText,
    },
    separator: {
      color: theme.colors.lightText,
    },
    title: {
      color: theme.colors.text,
    },
    place: {
      color: theme.colors.text,
    },
    restictions: {
      color: theme.colors.restrictionsText,
    },
  });
