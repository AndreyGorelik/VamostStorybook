import { Theme } from '@shared/hooks/useTheme.hook';
import { StyleSheet } from 'react-native';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: { backgroundColor: theme.colors.background },
    scrollWrapper: {
      rowGap: 20,
    },

    tagIcons: {
      width: 15,
      height: 15,
    },

    actionButtons: {
      width: '100%',
      flex: 1,
      flexDirection: 'row',
      gap: 10,
      justifyContent: 'space-between',
    },
    postInfo: {
      paddingHorizontal: 20,
      rowGap: 20,
    },
    requestsList: {
      marginVertical: 40,
      gap: 5,
    },
    actionBtn: {
      borderRadius: 20,
      height: 40,
      fontSize: 14,
      flex: 1,
    },
  });
