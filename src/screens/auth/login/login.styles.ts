import { StyleSheet } from 'react-native';

import { Theme } from '../../../shared/hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      padding: 20,
    },
    agreement: {
      alignContent: 'center',
      justifyContent: 'center',
      width: '90%',
      alignSelf: 'center',
      rowGap: 15,
      flex: 1,
    },
    content: {
      flex: 1,
      paddingVertical: 40,
      rowGap: 15,
    },
    pressable: {
      marginTop: 10,
      borderRadius: 30,
      paddingRight: 5,
    },
    accept: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      columnGap: 5,
      paddingHorizontal: 10,
    },
    forgotPass: {
      marginTop: 20,
      paddingVertical: 10,
      justifyContent: 'center',
      alignSelf: 'center',
    },
  });
