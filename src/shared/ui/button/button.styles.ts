import { StyleSheet } from 'react-native';

import { StylesOptions } from './button.types';

export const createStyles = ({ disabled, width, color, theme }: StylesOptions) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.styleConstants.borderRadius.small,
      height: theme.styleConstants.h50,
      width: width ?? 'auto',
      backgroundColor: color
        ? color
        : disabled
        ? theme.colors.buttonDisabled
        : theme.colors.primary,
    },
    text: {
      letterSpacing: 0.25,
      color: disabled ? theme.colors.textDisabled : theme.colors.buttonText,
    },
  });
