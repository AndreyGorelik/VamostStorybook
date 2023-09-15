import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 82,
      width: 75,
      backgroundColor: '#F06292',
      borderRadius: 16,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#F06292',
      shadowRadius: 10,
      shadowOpacity: 0.2,
      shadowOffset: {
        height: 10,
        width: 0,
      },
      rowGap: 4,
      elevation: 10,
    },
    title: {
      color: theme.colors.secondary,
      fontSize: 14,
      fontFamily: 'NunitoSans10pt-SemiBold',
    },
    icon: {
      color: theme.colors.text,
    },
  });
