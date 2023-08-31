import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      gap: 5,
      paddingHorizontal: 30,
      paddingVertical: 50,
    },
  });
