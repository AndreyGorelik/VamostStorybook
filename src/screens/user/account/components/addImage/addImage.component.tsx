import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { Button } from '@shared/ui/button';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import { Platform } from 'react-native';
import { addNewPhoto } from 'src/store/slices/user.slice';

import { PickedImg } from './addImage.types';

const AddImage = () => {
  const { uploadingPhoto } = useAppSelector((state) => state.userSlice);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const dispatch = useAppDispatch();
  const addPhoto = async () => {
    if (!status?.granted) {
      await requestPermission();
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      quality: 1,
      allowsMultipleSelection: true,
    });

    if (!result.canceled) {
      const newImages: PickedImg[] = [];
      result.assets.forEach(async (asset) => {
        const uri = Platform.OS === 'ios' ? asset.uri.replace('file://', '') : asset.uri;

        const fileData = {
          name: `image.${mime.getType(uri)?.split('/')[1]}`,
          type: mime.getType(uri),
          uri,
        };

        const image = {
          uri: asset.uri,
          imageData: fileData,
        };

        newImages.push(image);

        const photos = newImages.map((image) => image.imageData);

        dispatch(addNewPhoto(JSON.stringify(photos)));
      });
    }
  };

  return (
    <Button
      title="Add new photo"
      onPress={addPhoto}
      disabled={uploadingPhoto}
      loading={uploadingPhoto}
    />
  );
};

export default AddImage;
