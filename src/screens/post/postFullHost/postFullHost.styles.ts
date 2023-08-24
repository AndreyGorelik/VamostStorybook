import { StyleSheet } from 'react-native';

import { Theme } from '../../../shared/hooks/useTheme.hook';

export const createStyles = (_theme: Theme) =>
  StyleSheet.create({
    scrollWrapper: {
      flex: 1,
    },
    header: {
      position: 'relative',
      marginBottom: 50,
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
    guests: {
      flex: 1,
      flexDirection: 'row',
      bottom: -35,
      alignItems: 'flex-end',
      position: 'absolute',
      width: '100%',
      justifyContent: 'space-between',
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
    tags: {
      flexDirection: 'row',
      gap: 10,
      flexWrap: 'wrap',
    },
    tagIcons: {
      width: 15,
      height: 15,
    },
    tagItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
    },
    actionButtons: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
    },
    postInfo: {
      paddingHorizontal: 15,
    },
    requestsList: {
      marginVertical: 40,
      gap: 5,
    },
  });
