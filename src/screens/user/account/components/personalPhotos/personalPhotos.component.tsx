import { useAppSelector } from '@shared/hooks/redux.hook';
import useTheme from '@shared/hooks/useTheme.hook';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { View } from 'react-native';

import { PhotoContainer } from '../photoContainer';

import { createStyles } from './personalPhotos.styles';

export default function PersonalPhotos() {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [isLoading, setIsLoading] = useState<number | null>(null);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const { images: savedImages } = useAppSelector((state) => state.userSlice);
  const images = savedImages.map((image, index) => ({ id: index, image }));

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
      base64: true,
    });

    // if (!result.canceled) {
    //   if (id <= images.length) {
    //     setImages(
    //       result.assets.map((asset) => ({
    //         uri: asset.uri,
    //         imageData: 'data:image/jpeg;base64,' + asset.base64,
    //       }))
    //     );
    //   } else {
    //     setImages([
    //       ...images,
    //       ...result.assets
    //         .map((asset) => ({
    //           uri: asset.uri,
    //           imageData: 'data:image/jpeg;base64,' + asset.base64,
    //         }))
    //         .slice(0, 6 - images.length),
    //     ]);
    //   }
    // }
    setIsLoading(null);
  };

  function handleDelete(imageIndex: number) {
    //setImages(images.filter((value, index) => index !== imageIndex - 1));
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.firstColumn}>
        <PhotoContainer axis="width" />
        <View style={styles.row}>
          <PhotoContainer axis="height" />
          <PhotoContainer axis="height" />
        </View>
      </View>
      <View style={styles.secondColumn}>
        <PhotoContainer axis="width" />
        <PhotoContainer axis="width" />
        <PhotoContainer axis="width" />
      </View>
    </View>
  );
}
