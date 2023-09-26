import { StyleSheet } from 'react-native';

export const createStyles = () =>
  StyleSheet.create({
    header: {
      flexDirection: 'row',
      columnGap: 10,
      alignItems: 'center',
    },
    container: {
      gap: 10,
    },
  });
