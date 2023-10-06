import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      flexDirection: 'row',
      gap: 10,
      alignItems: 'center',
      paddingVertical: 5,
      paddingHorizontal: 20,
      height: 70,
    },
    row: {
      flexDirection: 'row',
      gap: 8,
    },
    rowSpaceBetween: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    userpic: {
      borderRadius: 100,
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    picOnt: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconWrapper: {
      width: 25,
      height: 25,
      backgroundColor: theme.colors.primary,
      borderRadius: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loader: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });
