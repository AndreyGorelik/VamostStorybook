import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      alignItems: 'flex-start',
      rowGap: 8,
    },
    date: {
      color: theme.colors.lightText,
    },
    time: {
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
    row: {
      flexDirection: 'row',
      columnGap: 3,
    },
    descriptions: {
      color: theme.colors.text,
    },
  });