import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme, size: number) =>
  StyleSheet.create({
    scrollWrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    scrollContent: {
      paddingBottom: 50,
    },
    linearGradient: {
      flex: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    postCardCover: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    photoContainer: {
      width: '100%',
      height: 250,
    },
    userPicture: {
      top: -35,
      left: 15,
    },
    postInfo: {
      paddingHorizontal: 15,
      rowGap: 30,
      paddingTop: 30,
    },
    mainInfo: { rowGap: 10 },
    guests: {
      flexDirection: 'row',
    },
    more: {
      width: size,
      height: size,
      backgroundColor: theme.colors.primary,
      borderRadius: 99,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 3,
      borderColor: theme.colors.secondary,
      marginLeft: -(size / 2),
    },
  });
