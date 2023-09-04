import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
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
    selectBtn: {
      width: '100%',
      marginTop: 15,
      marginBottom: 5,
    },
    gestureHandler: {
      flex: 1,
    },
  });
