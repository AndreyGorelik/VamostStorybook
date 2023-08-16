import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import Animated from 'react-native-reanimated';

import { Blank } from './components/blank';
import { ImageBox } from './components/imageBox';

export default function PhotoInput() {
  //image && setImage will be received from parent component
  const [image, setImage] = useState<string>('');
  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    if (!status?.granted) {
      await requestPermission();
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onDelete = () => setImage('');

  return (
    <Animated.View>
      {image ? <ImageBox uri={image} onDelete={onDelete} /> : <Blank pickImage={pickImage} />}
    </Animated.View>
  );
}
