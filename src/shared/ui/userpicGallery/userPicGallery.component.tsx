import useTheme from '@shared/hooks/useTheme.hook';
import { View, Image } from 'react-native';

import { createStyles } from './userPicGallery.styles';
import { UserPicGalleryProps } from './userPicGallery.types';
import { Ionicons } from '@expo/vector-icons';

export default function UserPicGallery({ data, size = 40 }: UserPicGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.row}>
      {data?.map((item, index) => {
        if (index > 0) {
          return item.avatar ? (
            <Image
              key={item.id}
              source={{ uri: item.avatar }}
              style={[styles.userpic, { marginLeft: -size / 3, width: size, height: size }]}
            />
          ) : (
            <Ionicons
              name="person-circle"
              size={60}
              color={theme.colors.lightText}
              style={{
                marginLeft: -size / 2,
              }}
            />
          );
        } else {
          return item.avatar ? (
            <Image
              key={item.id}
              source={{ uri: item.avatar }}
              style={[styles.userpic, { width: size, height: size }]}
            />
          ) : (
            <Ionicons name="person-circle" size={60} color={theme.colors.lightText} />
          );
        }
      })}
    </View>
  );
}
