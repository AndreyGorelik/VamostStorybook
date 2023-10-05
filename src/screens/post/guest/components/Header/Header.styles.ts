import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    header: {
      position: 'relative',
    },
    linearGradient: {
      flex: 1,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    textOnPhoto: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 20,
    },
    textHeader: {
      gap: -10,
      alignItems: 'center',
    },
    postCardCover: {
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
    photoContainer: {
      width: '100%',
      height: 300,
    },
    guests: {
      flexDirection: 'row',
      position: 'relative',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      flex: 1,
    },
    guestsGallery: {
      justifyContent: 'center',
      position: 'absolute',
      bottom: 0,
    },
  });
