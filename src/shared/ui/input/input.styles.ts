import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: '100%',
      position: 'relative',
      marginVertical: 10,
    },
    input: {
      borderBottomWidth: 0.5,
      paddingVertical: 10,
      fontSize: 17,
      paddingHorizontal: 0,
      fontFamily: 'NunitoSans10pt-Regular',
      color: theme.colors.primary,
    },
    placeholder: {
      position: 'absolute',
      fontFamily: 'NunitoSans10pt-Regular',
    },
    text: {
      padding: 0,
      margin: 0,
      color: theme.colors.placeholder,
    },
  });
