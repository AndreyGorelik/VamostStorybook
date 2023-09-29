import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    profile: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
    },
    profilePhoto: {
      width: 50,
      height: 50,
      borderRadius: 99,
    },
    separator: {
      height: 10,
    },
  });
