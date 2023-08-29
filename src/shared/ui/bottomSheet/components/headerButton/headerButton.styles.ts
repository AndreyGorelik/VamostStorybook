import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    iconWrapper: {
      position: 'relative',
      borderRadius: 99,
      color: theme.colors.text,
    },

    background: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.secondary,
      borderRadius: 99,
      opacity: 0.85,
    },

    icon: {
      position: 'absolute',
      width: 40,
      height: 40,
      color: theme.colors.text,
      justifyContent: 'center',
      alignItems: 'center',
    },

    right: {
      right: 20,
    },

    left: {
      left: 20,
    },

    top: {
      top: 20,
    },
  });
