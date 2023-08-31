import { Filters } from '@screens/home/home.component';
import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, filter: Filters, name: Filters) =>
  StyleSheet.create({
    wrapper: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    text: {
      color: filter === name ? theme.colors.text : theme.colors.textDisabled,
    },
  });
