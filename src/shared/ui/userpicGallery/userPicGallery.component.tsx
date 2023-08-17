import { View, StyleSheet, Image } from 'react-native';

import { PostGuests } from '../postCard/postCard.component';

interface UserPicGalleryProps {
  data: PostGuests[];
  size?: number;
}

export default function UserPicGallery({ data, size = 40 }: UserPicGalleryProps) {
  return (
    <View style={styles.row}>
      {data?.map((item, index) => {
        if (index > 0) {
          return (
            <Image
              key={item.id}
              source={item.guestPhoto}
              style={[styles.userpic, styles.overlayUserpic, { width: size, height: size }]}
            />
          );
        } else {
          return (
            <Image
              key={item.id}
              source={item.guestPhoto}
              style={[styles.userpic, { width: size, height: size }]}
            />
          );
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
    borderRadius: 100,
    borderWidth: 3,
    borderColor: 'white',
  },
  overlayUserpic: {
    marginLeft: -20,
  },
});
