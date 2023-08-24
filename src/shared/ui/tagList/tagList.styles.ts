import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: 10,
      flexWrap: 'wrap',
    },
    tagButton: {
      padding: 5,
      borderRadius: 5,
    },
    text: {
      color: theme.colors.text,
    },
  });