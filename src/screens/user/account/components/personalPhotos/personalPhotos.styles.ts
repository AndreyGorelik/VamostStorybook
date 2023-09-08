import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      aspectRatio: 1,
      position: 'relative',
      justifyContent: 'space-between',
      flex: 1,
    },
    firstColumn: { width: '65%', justifyContent: 'space-between' },
    secondColumn: { width: '30%', justifyContent: 'space-between' },
    row: { flexDirection: 'row', justifyContent: 'space-between', height: '30%' },
  });
