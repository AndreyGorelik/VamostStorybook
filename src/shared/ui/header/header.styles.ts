import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 20,
      paddingVertical: 5,
      backgroundColor: theme.colors.background,
    },
    logo: {
      overflow: 'hidden',
      height: 30,
      flex: 1,
      marginBottom: 3,
      alignItems: 'center',
      justifyContent: 'center',
    },
    left: { flex: 1 },
    right: { flex: 1, alignItems: 'flex-end' },
  });
