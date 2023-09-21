import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { View, Image } from 'react-native';

import { createStyles } from './userPicGallery.styles';
import { UserPicGalleryProps } from './userPicGallery.types';

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
              style={[styles.userpic, { marginLeft: -size / 2, width: size, height: size }]}
            />
          ) : (
            <View
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                  marginLeft: -size / 2,
                },
              ]}
            >
              <Ionicons
                name="person"
                color={theme.colors.secondary}
                size={size / 1.5}
                style={{
                  alignSelf: 'center',
                }}
              ></Ionicons>
            </View>
          );
        } else {
          return item.avatar ? (
            <Image
              key={item.id}
              source={{ uri: item.avatar }}
              style={[styles.userpic, { width: size, height: size }]}
            />
          ) : (
            <View
              style={[
                styles.icon,
                {
                  width: size,
                  height: size,
                },
              ]}
            >
              <Ionicons
                name="person"
                color={theme.colors.secondary}
                size={size / 1.5}
                style={{
                  alignSelf: 'center',
                }}
              ></Ionicons>
            </View>
          );
        }
      })}
    </View>
  );
}
