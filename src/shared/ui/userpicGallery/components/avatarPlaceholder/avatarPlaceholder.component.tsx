import { Ionicons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import React, { useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';

import { createStyles } from './avatarPlaceholder.styles';
import { AvatarPlaceholderProps } from './avatarPlaceholder.types';

export default function AvatarPlaceholder({ style, item, size }: AvatarPlaceholderProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [loading, setLoading] = useState<boolean>(false);

  return item.avatar ? (
    <View style={style}>
      <Image
        key={item._id}
        source={{ uri: getImagePath(item.avatar) }}
        style={[styles.userpic, { width: size, height: size }]}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
      {loading && (
        <ActivityIndicator size={size / 3} color={theme.colors.text} style={styles.loader} />
      )}
    </View>
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
