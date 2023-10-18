import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    imageWrapper: {
      position: 'relative',
      flex: 1,
      flexDirection: 'row',
      padding: 10,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
    },
  });
