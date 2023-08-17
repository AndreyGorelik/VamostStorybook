import { View, StyleSheet, Image } from 'react-native';

import { PostGuests } from '../postCard/postCard.component';

type UserPicGalleryProps = PostGuests[];

export default function UserPicGallery({ data }: { data: UserPicGalleryProps }) {
  return (
    <View style={styles.row}>
      {data?.map((item, index) => {
        if (index > 0) {
          return (
            <Image
              key={item.id}
              source={item.guestPhoto}
              style={[styles.userpic, styles.overlayUserpic]}
            />
          );
        } else {
          return <Image key={item.id} source={item.guestPhoto} style={styles.userpic} />;
        }
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
  userpic: {
    width: 40,
    height: 40,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  overlayUserpic: {
    marginLeft: -20,
  },
});
