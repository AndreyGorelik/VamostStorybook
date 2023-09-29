import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (
  theme: Theme,
  placeholder: string,
  fontSize?: number,
  error?: boolean
) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      flex: 1,
    },
    input: {
      fontSize: fontSize ? fontSize : 17,
      paddingHorizontal: 0,
      color: error ? theme.colors.red : theme.colors.primary,
      textAlign: placeholder.length === 1 ? 'center' : 'auto',
      minWidth: 24,
      flex: 1,
    },
    inputWrapper: {
      borderBottomWidth: 0.5,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    error: {
      borderColor: theme.colors.warning,
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
      color: error ? theme.colors.red : theme.colors.placeholder,
    },
  });
