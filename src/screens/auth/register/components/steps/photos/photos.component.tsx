import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View } from 'react-native';

import useTheme from '../../../../../../shared/hooks/useTheme.hook';
import { Button } from '../../../../../../shared/ui/button';
import { PhotoInput } from '../../../../../../shared/ui/photoInput';
import Text from '../../../../../../shared/ui/text/text.component';

import { PhotosData } from './photos.data';
import { createStyles } from './photos.styles';
import { PhotosProps } from './photos.types';

export default function Photos({ goAhead }: PhotosProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<number | null>(null);

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  function onSubmit() {
    goAhead();
  }

  const pickImage = async (id: number) => {
    // No permissions request is necessary for launching the image library
    if (!status?.granted) {
      await requestPermission();
    }
    setIsLoading(id);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      if (id <= images.length) {
        setImages(result.assets.map((asset) => asset.uri));
      } else {
        setImages([
          ...images,
          ...result.assets.map((asset) => asset.uri).slice(0, 6 - images.length),
        ]);
      }
    }
    setIsLoading(null);
  };

  function handleDelete(imageIndex: number) {
    setImages(images.filter((value, index) => index !== imageIndex - 1));
  }

  return (
    <View style={styles.wrapper}>
      <Text variant="h2" margin={true}>
        Add photos
      </Text>
      <View style={styles.subInfo}>
        <Text variant="common" fontSize={17}>
          Add at least one photo to continue.
        </Text>
      </View>

      <View style={styles.content}>
        {PhotosData.map((item, index) => (
          <PhotoInput
            id={item.id}
            image={images[index]}
            key={item.id}
            loading={item.id === isLoading}
            onDelete={handleDelete}
            pickImage={() => pickImage(item.id)}
          />
        ))}
      </View>
      <Button title="Continue" onPress={onSubmit} disabled={images.length === 0} />
    </View>
  );
}
