import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    label: {
      flexDirection: 'row',
      backgroundColor: theme.colors.secondRed,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      borderRadius: 100,
      padding: 5,
      minWidth: '50%',
      paddingHorizontal: 15,
    },
  });
