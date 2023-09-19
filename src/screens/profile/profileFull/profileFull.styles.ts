import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      flex: 1,
      backgroundColor: theme.colors.background,
      paddingTop: 10,
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
      position: 'absolute',
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
      top: -40,
      flex: 1,
      backgroundColor: theme.colors.secondary,
      borderTopLeftRadius: 40,
      borderTopRightRadius: 40,
      paddingTop: 35,
      paddingHorizontal: 20,
      rowGap: 10,
    },
    shareBtn: {
      position: 'absolute',
      top: 20,
      right: 20,
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
    infoRow: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });
