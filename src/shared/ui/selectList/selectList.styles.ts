import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    btnList: {
      gap: 10,
    },
    listItem: {
      height: 50,
    },
  });
