import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme, iconsSize: number) =>
  StyleSheet.create({
    icons: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginLeft: -iconsSize / 2,
      marginTop: -iconsSize / 2,
    },
  });
