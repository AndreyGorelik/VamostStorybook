import Animated from 'react-native-reanimated';

import { Blank } from './components/blank';
import { ImageBox } from './components/imageBox';
import { createStyles } from './photoInput.styles';
import { PhotoInputProps } from './photoInput.types';

export default function PhotoInput({
  image,
  pickImage,
  onDelete,
  id,
  loading,
  height,
}: PhotoInputProps) {
  const styles = createStyles();

  return (
    <Animated.View style={[styles.wrapper, { height: height ?? '100%' }]}>
      {image ? (
        <ImageBox uri={image} onDelete={() => onDelete(id)} />
      ) : (
        <Blank pickImage={pickImage} loading={loading} />
      )}
    </Animated.View>
  );
}
