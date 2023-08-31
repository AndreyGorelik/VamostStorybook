import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    divider: {
      width: '100%',
      flex: 1,
      height: 1,
      marginVertical: 3,
      borderRadius: 5,
      backgroundColor: theme.colors.divider,
      alignSelf: 'center',
    },
  });
