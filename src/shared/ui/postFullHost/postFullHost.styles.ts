import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
    flexDirection: 'row',
    gap: 10,
  },
  postInfo: {
    paddingHorizontal: 15,
  },
  requestsList: {
    marginVertical: 10,
    gap: 5,
  },
});
