import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    separator: {
      fontSize: 20,
      color: theme.colors.placeholder,
    },
    wrapper: { flexDirection: 'row', columnGap: 10, alignItems: 'center' },
  });
