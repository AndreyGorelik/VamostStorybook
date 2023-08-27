import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { PhotoInput } from '@shared/ui/photoInput';
import Text from '@shared/ui/text/text.component';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { FlatList, View } from 'react-native';

import { PhotosData } from './photos.data';
import { createStyles } from './photos.styles';
import { PhotosProps } from './photos.types';

const COLUMN_AMOUNT = 3;

export default function Photos({ goAhead }: PhotosProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const [flatListHeight, setFlatListHeight] = useState<number>(0);

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  function onSubmit() {
    goAhead();
  }

  const pickImage = async (id: number) => {
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
      <Text variant="h2">Add photos</Text>
      <View style={styles.subInfo}>
        <Text variant="common" fontSize={17}>
          Add at least one photo to continue.
        </Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={PhotosData}
          onLayout={(event) => setFlatListHeight(event.nativeEvent.layout.height)}
          renderItem={({ item, index }) => (
            <PhotoInput
              id={item.id}
              image={images[index]}
              loading={item.id === isLoading}
              onDelete={handleDelete}
              pickImage={() => pickImage(item.id)}
              height={flatListHeight / (Math.ceil(PhotosData.length / COLUMN_AMOUNT) * 1.22)}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          numColumns={COLUMN_AMOUNT}
        />
      </View>
      <Button title="Finish registration" onPress={onSubmit} disabled={images.length === 0} />
    </View>
  );
}
