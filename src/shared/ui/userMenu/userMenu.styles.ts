import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 100,
    },
    image: {
      height: 70,
      width: 70,
      borderRadius: 99,
    },
    linearGradient: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      opacity: 0.5,
    },
    imageWrapper: {
      position: 'relative',
      flex: 1,
      flexDirection: 'row',
      padding: 10,
    },
    userInfo: {
      flex: 1,
      flexDirection: 'row',
      columnGap: 15,
    },
    textWrapper: {
      justifyContent: 'center',
      rowGap: 2,
      paddingBottom: 10,
    },
    text: {
      color: theme.colors.secondary,
      fontSize: 16,
    },
  });
