import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      columnGap: 20,
      paddingVertical: 20,
    },
    imageWrapper: {
      height: 150,
      width: 110,
      overflow: 'hidden',
      borderRadius: theme.styleConstants.borderRadius.big,
    },
    image: {
      height: '100%',
      width: '100%',
    },
    content: {
      rowGap: 8,
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
    descriptions: {
      color: theme.colors.lightText,
      paddingRight: 15,
    },
    header: {
      rowGap: 5,
    },
    row: {
      flexDirection: 'row',
      columnGap: 3,
    },
  });
