import { View, Image } from 'react-native';

import { styles } from './userPicGallery.styles';
import { UserPicGalleryProps } from './userPicGallery.types';

export default function UserPicGallery({ data, size = 40 }: UserPicGalleryProps) {
  return (
    <View style={styles.row}>
      {data?.map((item, index) => {
        if (index > 0) {
          return (
            <Image
              key={item.id}
              source={item.guestPhoto}
              style={[styles.userpic, { marginLeft: -size / 2, width: size, height: size }]}
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
