import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: 20,
      paddingHorizontal: 10,
      paddingVertical: 20,
    },
  });
