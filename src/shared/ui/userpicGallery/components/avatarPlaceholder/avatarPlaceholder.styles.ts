import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    icon: {
      backgroundColor: theme.colors.lightText,
      borderRadius: 100,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 3,
      borderColor: theme.colors.secondary,
      aspectRatio: 1,
    },
    userpic: {
      borderColor: theme.colors.secondary,
      backgroundColor: theme.colors.secondary,
      borderRadius: 99,
      borderWidth: 3,
    },
    loader: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });
