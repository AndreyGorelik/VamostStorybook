import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme, SCREEN_HEIGHT: number) =>
  StyleSheet.create({
    bottomSheetContainer: {
      width: '100%',
      position: 'absolute',
      bottom: -SCREEN_HEIGHT,
      borderRadius: theme.styleConstants.borderRadius.big,
      backgroundColor: theme.colors.background,
      padding: 15,
      paddingTop: 0,
    },
    line: {
      width: '100%',
      height: 1,
      backgroundColor: theme.colors.placeholder,
      alignSelf: 'center',
      marginVertical: 15,
      borderRadius: 2,
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 90,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.placeholder,
    },
    headerText: {
      color: theme.colors.text,
    },

    leftIcon: {
      position: 'absolute',
      left: 0,
      color: theme.colors.text,
    },

    rightIcon: {
      position: 'absolute',
      right: 0,
      color: theme.colors.text,
    },

    backdrop: {},
  });
