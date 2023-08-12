import { StyleSheet } from 'react-native';

import { OutlinedBtnStyle } from './outlinedBtn.types';

export const createStyles = ({ disabled, selected, width, color, theme }: OutlinedBtnStyle) =>
  StyleSheet.create({
    button: {
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      height: 50,
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
    },
    text: {
      fontSize: 15,
      letterSpacing: 0.25,
      color: color
        ? color
        : disabled
        ? theme.colors.textDisabled
        : selected
        ? theme.colors.selected
        : theme.colors.button,
      paddingVertical: 10,
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
