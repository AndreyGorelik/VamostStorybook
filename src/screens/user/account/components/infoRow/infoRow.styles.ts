import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: { flexDirection: 'row', alignItems: 'center' },
    text: { color: theme.colors.text },
    inputEdit: {
      marginVertical: 4,
      flex: 1,
      backgroundColor: theme.colors.transparentBack,
      borderRadius: 5,
      padding: 5,
    },
    inputNoEdit: {
      marginVertical: 4,
      flex: 1,
    },
    selectEdit: {
      flex: 1,
      backgroundColor: theme.colors.transparentBack,
      borderRadius: 5,
      paddingHorizontal: 5,
    },
  });
