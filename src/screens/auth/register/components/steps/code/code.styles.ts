import { StyleSheet } from 'react-native';

import { Theme } from '../../../../../../shared/hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    agreement: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      paddingBottom: 30,
      columnGap: 5,
    },
    content: {
      flex: 1,
      paddingVertical: 40,
      rowGap: 15,
    },
    sendOver: {
      fontSize: 13,
      textDecorationLine: 'underline',
      fontWeight: '700',
    },
  });
