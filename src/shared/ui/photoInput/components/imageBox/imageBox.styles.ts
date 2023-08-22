import { StyleSheet } from 'react-native';

import { Theme } from '../../../../hooks/useTheme.hook';

export const createStyles = (theme: Theme) =>
  StyleSheet.create({
    wrapper: {
      height: 160,
      width: 110,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: theme.styleConstants.borderRadius.big,
      backgroundColor: theme.colors.imagePlaceholder,
      overflow: 'hidden',
    },
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    gradient: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 9,
    },
  });
