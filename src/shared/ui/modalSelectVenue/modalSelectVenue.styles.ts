import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    safeArea: {
      flex: 1,
    },
    wrapper: {
      flex: 1,
      padding: 20,
    },
    image: { width: '100%', height: 200 },
  });
