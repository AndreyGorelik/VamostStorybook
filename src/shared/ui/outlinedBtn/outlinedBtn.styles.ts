import { StyleSheet } from 'react-native';

import { OutlinedBtnStyle } from './outlinedBtn.types';

export const createStyles = ({
  theme,
  disabled,
  selected,
  width,
  height,
  color,
  borderRadius,
  fontSize,
  flex,
}: OutlinedBtnStyle) =>
  StyleSheet.create({
    button: {
      flex: flex ?? 0,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: borderRadius ?? 5,
      height: height ?? 50,
      width: width ?? 'auto',
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: color
        ? color
        : disabled
        ? theme.colors.buttonDisabled
        : selected
        ? theme.colors.selected
        : theme.colors.button,
      opacity: disabled ? 0.6 : 1,
    },
    text: {
      letterSpacing: 0.25,
      fontSize: fontSize,
      color: color
        ? color
        : disabled
        ? theme.colors.textDisabled
        : selected
        ? theme.colors.selected
        : theme.colors.button,
    },
    icon: {
      color: color
        ? color
        : disabled
        ? 'rgba(0, 0, 0, 0.19)'
        : selected
        ? 'rgb(34, 127, 158)'
        : 'rgb(0,0,0)',
      position: 'absolute',
      right: 15,
    },
  });
