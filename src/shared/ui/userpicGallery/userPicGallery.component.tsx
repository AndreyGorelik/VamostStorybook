import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { router } from 'expo-router';
import { View, Image, Pressable } from 'react-native';

import { createStyles } from './userPicGallery.styles';
import { UserPicGalleryProps } from './userPicGallery.types';

export default function UserPicGallery({ data, size = 40 }: UserPicGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
      onPress={() =>
        router.push({
          params: {
            guests: JSON.stringify(data ? data : []),
          },
          pathname: '/profileslist',
        })
      }
      style={styles.row}
    >
      {data?.map((item, index) => {
        if (index > 0) {
          return item.avatar ? (
            <Image
              key={item._id}
              source={{ uri: getImagePath(item.avatar) }}
              style={[styles.userpic, { marginLeft: -size / 2, width: size, height: size }]}
            />
          ) : (
            <View
              key={item._id}
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
              key={item._id}
              source={{ uri: getImagePath(item.avatar) }}
              style={[styles.userpic, { width: size, height: size }]}
            />
          ) : (
            <View
              key={item._id}
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
    </Pressable>
  );
}
