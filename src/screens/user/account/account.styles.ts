import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.colors.background,
      width: '100%',
    },
    linearGradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.8,
      backgroundColor: theme.colors.primary,
    },
    imageWrapper: {
      height: 350,
      justifyContent: 'center',
      alignItems: 'center',
      paddingBottom: 20,
    },
    imageBackground: {
      opacity: 0.8,
    },
    userInfo: {
      alignItems: 'center',
    },
    image: {
      height: 100,
      width: 100,
      borderRadius: 100,
    },
    text: {
      color: theme.colors.secondary,
      fontFamily: 'NunitoSans10pt-Regular',
    },
    nickname: {
      textTransform: 'uppercase',
      fontFamily: 'NunitoSans10pt-Bold',
    },
    userContent: {
      position: 'relative',
      top: -40,
      flex: 1,
      backgroundColor: theme.colors.secondary,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingTop: 35,
      paddingHorizontal: 20,
      rowGap: 30,
    },
    actions: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    recentMeetups: {
      width: '100%',
    },
    meetupsWrapper: { columnGap: 20, paddingVertical: 15 },
  });
