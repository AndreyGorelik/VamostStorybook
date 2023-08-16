//import * as ImagePicker from 'expo-image-picker';
//import { useState } from 'react';
import Animated from 'react-native-reanimated';

import { Blank } from './components/blank';
import { ImageBox } from './components/imageBox';
import { PhotoInputProps } from './photoInput.types';

export default function PhotoInput({ image, pickImage, onDelete, id }: PhotoInputProps) {
  //image, setImage will be received from parent component, pickImage will be in parent component
  //const [image, setImage] = useState<string>('');
  //const [status, requestPermission] = ImagePicker.useCameraPermissions();

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   if (!status?.granted) {
  //     await requestPermission();
  //   }

  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: false,
  //     quality: 1,
  //     allowsMultipleSelection: true,
  //   });
  //   console.log(result);
  //   if (!result.canceled) {
  //     setImage(result.assets[0].uri);
  //   }
  // };

  //const onDelete = () => setImage('');

  return (
    <Animated.View>
      {image ? (
        <ImageBox uri={image} onDelete={() => onDelete(id)} />
      ) : (
        <Blank pickImage={pickImage} />
      )}
    </Animated.View>
  );
}
