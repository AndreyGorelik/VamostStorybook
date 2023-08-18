import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 8,
  },
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
    gap: 8,
  },
  userpic: {
    borderRadius: 100,
    width: 60,
    height: 60,
  },
  iconWrapper: {
    width: 25,
    height: 25,
    backgroundColor: 'black',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
