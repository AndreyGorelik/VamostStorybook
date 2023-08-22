import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme, placeholder: string, fontSize?: number) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      marginVertical: 10,
      flex: 1,
    },
    input: {
      borderBottomWidth: 0.5,
      paddingVertical: 10,
      fontSize: fontSize ? fontSize : 17,
      paddingHorizontal: 0,
      fontFamily: 'NunitoSans10pt-Regular',
      color: theme.colors.primary,
      textAlign: placeholder.length === 1 ? 'center' : 'auto',
      minWidth: 24,
    },
    placeholder: {
      position: 'absolute',
      fontFamily: 'NunitoSans10pt-Regular',
      width: '100%',
      alignItems: placeholder.length === 1 ? 'center' : 'flex-start',
    },
    text: {
      padding: 0,
      margin: 0,
      color: theme.colors.placeholder,
    },
  });
