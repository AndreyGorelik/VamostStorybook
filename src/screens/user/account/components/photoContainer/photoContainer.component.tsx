import Photo from '@assets/images/postCardImages/postCardMainPhoto.jpeg';
import useTheme from '@shared/hooks/useTheme.hook';
import { View, Image } from 'react-native';

import { createStyles } from './photoContainer.styles';
import { PhotoContainerProps } from './photoContainer.types';

export default function PhotoContainer({ axis, imageUrl }: PhotoContainerProps) {
  const theme = useTheme();
  const styles = createStyles(theme, axis);

  return (
    <View style={styles.wrapper}>
      <Image source={imageUrl ? { uri: imageUrl } : Photo} style={styles.image} />
    </View>
  );
}
