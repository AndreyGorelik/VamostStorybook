import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: theme.styleConstants.borderRadius.medium,
      overflow: 'hidden',
    },
    headerText: {
      position: 'absolute',
      bottom: 20,
      color: theme.colors.secondary,
    },

    image: {
      position: 'relative',
      flex: 1,
      flexDirection: 'row',
      height: 200,
      justifyContent: 'center',
    },

    iconWrapper: {
      position: 'relative',
      borderRadius: 99,
      color: theme.colors.text,
    },

    background: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      backgroundColor: theme.colors.secondary,
      borderRadius: 99,
      opacity: 0.85,
    },
  });
