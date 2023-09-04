import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: 5,
      paddingHorizontal: 30,
    },
    textInput: {
      height: 70,
    },
  });
