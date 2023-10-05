import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    tags: {
      flexDirection: 'row',
      gap: 10,
      flexWrap: 'wrap',
    },
    tagItem: {
      flexDirection: 'row',
      alignItems: 'center',
      columnGap: 5,
    },
    text: {
      textTransform: 'capitalize',
    },
  });
