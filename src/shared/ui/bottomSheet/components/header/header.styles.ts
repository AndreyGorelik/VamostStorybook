import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.placeholder,
    },
    headerText: {
      color: theme.colors.text,
    },

    image: {
      flex: 1,
      justifyContent: 'center',
    },

    leftIcon: {
      position: 'absolute',
      left: 15,
      color: theme.colors.text,
    },

    rightIcon: {
      position: 'absolute',
      right: 15,
      color: theme.colors.text,
    },
  });
