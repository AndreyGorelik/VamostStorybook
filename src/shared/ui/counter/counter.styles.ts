import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, decreaseDisabled: boolean) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.counterText,
    },
    valueText: {
      color: theme.colors.primary,
    },
    controls: {
      flexDirection: 'row',
      alignItems: 'center',
      width: 100,
      justifyContent: 'space-between',
    },
    increase: {
      color: theme.colors.increaseBtn,
    },
    decrease: {
      color: theme.colors.decreaseBtn,
      opacity: decreaseDisabled ? 0.6 : 1,
    },
  });
