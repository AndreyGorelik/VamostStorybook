//import * as ImagePicker from 'expo-image-picker';
//import { useState } from 'react';
import Animated from 'react-native-reanimated';

import { Blank } from './components/blank';
import { ImageBox } from './components/imageBox';
import { PhotoInputProps } from './photoInput.types';

export default function PhotoInput({ image, pickImage, onDelete, id, loading }: PhotoInputProps) {
  return (
    <Animated.View>
      {image ? (
        <ImageBox uri={image} onDelete={() => onDelete(id)} />
      ) : (
        <Blank pickImage={pickImage} loading={loading} />
      )}
    </Animated.View>
  );
}
