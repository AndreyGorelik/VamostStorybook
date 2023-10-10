import useTheme from '@shared/hooks/useTheme.hook';
import { router } from 'expo-router';
import { Pressable } from 'react-native';

import AvatarPlaceholder from './components/avatarPlaceholder/avatarPlaceholder.component';
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
          return (
            <AvatarPlaceholder
              key={item._id}
              size={size}
              item={item}
              style={{ marginLeft: -size / 2 }}
            />
          );
        } else {
          return <AvatarPlaceholder key={item._id} size={size} item={item} />;
        }
      })}
    </Pressable>
  );
}
