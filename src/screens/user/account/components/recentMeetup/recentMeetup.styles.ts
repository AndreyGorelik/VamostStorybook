import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    meetUpImageStyle: {
      borderRadius: 16,
    },
    meetupImageWrapper: {
      width: 160,
      height: 180,
      borderRadius: 15,
      alignItems: 'center',
    },
    mmetUpLinearGradient: {
      position: 'absolute',
      height: '100%',
      width: '100%',
      opacity: 0.5,
      borderRadius: 16,
    },
    meetupText: {
      position: 'absolute',
      color: theme.colors.secondary,
      bottom: 10,
      fontFamily: 'NunitoSans10pt-Regular',
      fontSize: 16,
    },
  });
