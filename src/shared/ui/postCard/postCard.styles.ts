import { StyleSheet } from 'react-native';

import { Theme } from '../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      marginHorizontal: 10,
      backgroundColor: theme.colors.background,
      borderRadius: 15,
      shadowColor: theme.colors.shadow,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    postCardCover: {
      width: '100%',
      height: 200,
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    photoContainer: {
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15,
    },
    textContainer: {
      padding: 10,
    },
    row: {
      flexDirection: 'row',
    },
    rowSpaceBetween: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    linearGradient: {
      flex: 1,
    },
    imageInfo: {
      position: 'absolute',
      bottom: 0,
      padding: 10,
    },
  });
