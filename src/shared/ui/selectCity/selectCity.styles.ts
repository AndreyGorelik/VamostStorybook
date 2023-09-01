import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      position: 'absolute',
      top: 30,
      bottom: 30,
      left: 10,
      right: 10,
      backgroundColor: theme.colors.background,
      padding: 20,
      paddingVertical: 30,
      paddingTop: 50,
      borderRadius: theme.styleConstants.borderRadius.big,
    },
    listItem: {
      paddingVertical: 10,
      paddingHorizontal: 10,
      borderRadius: theme.styleConstants.borderRadius.small,
    },
    input: {
      height: 70,
    },
    underInput: {
      flexDirection: 'row',
      columnGap: 10,
      paddingBottom: 10,
    },
    close: {
      position: 'absolute',
      right: 15,
      top: 15,
      borderRadius: 99,
    },
  });
