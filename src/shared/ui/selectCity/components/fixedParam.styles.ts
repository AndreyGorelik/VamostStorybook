import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      backgroundColor: theme.colors.tag,
      paddingHorizontal: 6,
      paddingVertical: 5,
      alignItems: 'center',
      borderRadius: theme.styleConstants.borderRadius.medium,
      columnGap: 3,
    },
  });
