import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

const HEIGHT = 150;
const BORDER_RADIUS = 15;

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    isTheOnlyOneImage: {
      width: '100%',
      height: HEIGHT,
      borderRadius: BORDER_RADIUS,
    },
    isTheFirstImage: {
      flex: 1,
      minWidth: '65%',
      height: HEIGHT,
      borderRadius: BORDER_RADIUS,
    },
    notTheFirstImage: {
      flex: 1,
      minWidth: '30%',
      height: HEIGHT,
      borderRadius: BORDER_RADIUS,
    },
    isLastImage: {
      flex: 1,
      minWidth: '65%',
      height: HEIGHT,
      borderRadius: BORDER_RADIUS,
      justifyContent: 'center',
    },
    linearGradient: {
      flex: 1,
      borderRadius: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
    flex: {
      flex: 1,
    },
  });
