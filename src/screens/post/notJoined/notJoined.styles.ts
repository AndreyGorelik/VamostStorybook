import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    scrollWrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
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
      width: 70,
      height: 70,
      borderRadius: 50,
      borderWidth: 3,
      borderColor: theme.colors.background,
      backgroundColor: theme.colors.secondary,
      position: 'relative',
      top: -35,
      left: 15,
      marginBottom: -35,
    },
    postInfo: {
      paddingHorizontal: 15,
      rowGap: 30,
      paddingTop: 30,
    },
    mainInfo: { rowGap: 10 },
  });
