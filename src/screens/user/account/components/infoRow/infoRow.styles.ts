import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: { flexDirection: 'row', alignItems: 'center' },
    text: { color: theme.colors.text },
  });
