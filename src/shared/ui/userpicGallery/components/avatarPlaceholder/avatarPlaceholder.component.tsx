import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import React from 'react';
import { View, Image } from 'react-native';

import { createStyles } from './avatarPlaceholder.styles';
import { AvatarPlaceholderProps } from './avatarPlaceholder.types';

export default function AvatarPlaceholder({
  style,
  item,
  size,
  imageStyle,
}: AvatarPlaceholderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);

  return item.avatar ? (
    <Image
      key={item._id}
      source={{ uri: getImagePath(item.avatar) }}
      style={[styles.userpic, { width: size, height: size }, imageStyle]}
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
        style,
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
