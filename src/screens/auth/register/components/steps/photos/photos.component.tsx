import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import { Button } from '@shared/ui/button';
import { PhotoInput } from '@shared/ui/photoInput';
import Text from '@shared/ui/text/text.component';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import { useState } from 'react';
import { FlatList, Platform, View } from 'react-native';
import { registerPhotoAction } from 'src/store/slices/auth.slice';

import { PhotosData } from './photos.data';
import { createStyles } from './photos.styles';

const COLUMN_AMOUNT = 3;

export default function Photos() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const dispatch = useAppDispatch();
  const { isLoading: loading, error } = useAppSelector((state) => state.authSlice);
  const [images, setImages] = useState<{ uri: string; imageData: FormData }[]>([]);
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const [flatListHeight, setFlatListHeight] = useState<number>(0);

  const [status, requestPermission] = ImagePicker.useCameraPermissions();

  function onSubmit() {
    const photos = images.map((image) => image.imageData);
    dispatch(registerPhotoAction(photos));
  }

  const pickImage = async (id: number) => {
    if (!status?.granted) {
      await requestPermission();
    }
    setIsLoading(id);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      quality: 0,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newImages = id <= images.length ? [] : [...images];
      result.assets.forEach(async (asset) => {
        const formData = new FormData();
        const uri = Platform.OS === 'ios' ? asset.uri.replace('file://', '') : asset.uri;
        const fileData = {
          name: `image.${mime.getType(uri)?.split('/')[1]}`,
          type: mime.getType(uri),
          uri,
        };
        formData.append('imageData', fileData as any);
        const image = {
          uri: asset.uri,
          imageData: formData,
        };

        newImages.push(image);
      });
      setImages(newImages);
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
              image={images[index]?.uri}
              loading={item.id === isLoading}
              onDelete={handleDelete}
              pickImage={() => pickImage(item.id)}
              height={flatListHeight / (Math.ceil(PhotosData.length / COLUMN_AMOUNT) * 1.22)}
            />
          )}
          keyExtractor={(item) => `${item.id}`}
          numColumns={COLUMN_AMOUNT}
        />
        {error && <Text variant="warning">{error}</Text>}
      </View>
      <Button
        title="Finish registration"
        onPress={onSubmit}
        disabled={images.length === 0}
        loading={loading}
      />
    </View>
  );
}
