import { MaterialIcons } from '@expo/vector-icons';
import useTheme from '@shared/hooks/useTheme.hook';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ActivityIndicator } from 'react-native';

import { createStyles } from './smartImage.styles';
import { LoadStatus, SmartImageProps } from './smartImage.types';

export const ICONS_SIZE = 34;

function SmartImage({ photo, style, contentFit }: SmartImageProps) {
  const [loadStatus, setLoadStatus] = useState<LoadStatus>(LoadStatus.PENDING);
  const theme = useTheme();
  const styles = createStyles(theme, ICONS_SIZE);
  return (
    <>
      <Image
        key={photo._id}
        source={{ uri: photo.imagePath }}
        style={style}
        cachePolicy="memory-disk"
        onLoad={() => {
          setLoadStatus(LoadStatus.DONE);
        }}
        onError={() => {
          setLoadStatus(LoadStatus.ERROR);
        }}
        contentFit={contentFit}
      />
      {loadStatus === 'pending' && <ActivityIndicator style={styles.icons} size={ICONS_SIZE} />}
      {loadStatus === 'error' && (
        <MaterialIcons
          name="error-outline"
          size={ICONS_SIZE}
          color={theme.colors.primary}
          style={styles.icons}
        />
      )}
    </>
  );
}

export default SmartImage;
