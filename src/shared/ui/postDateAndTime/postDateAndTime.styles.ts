import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      gap: 5,
      flexWrap: 'wrap',
      alignItems: 'center',
    },
    tagButton: {
      padding: 5,
      borderRadius: 5,
    },
    dateField: {
      flexDirection: 'row',
      gap: 5,
      flexWrap: 'wrap',
      alignItems: 'center',
      borderRadius: 10,
      borderColor: theme.colors.border,
      borderWidth: 1,
      padding: 5,
    },
  });
