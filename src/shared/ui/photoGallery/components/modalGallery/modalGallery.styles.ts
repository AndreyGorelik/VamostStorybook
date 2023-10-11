import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    flex: {
      flex: 1,
      position: 'relative',
    },
    headerBtns: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      padding: 10,
    },
    photoCounter: {
      position: 'absolute',
      width: '100%',
      padding: 10,
      alignItems: 'center',
    },
  });
