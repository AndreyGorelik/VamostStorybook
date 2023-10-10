import { PickedImage } from '@screens/auth/register/components/steps/photos/photos.types';
import { useAppDispatch, useAppSelector } from '@shared/hooks/redux.hook';
import { Button } from '@shared/ui/button';
import * as ImagePicker from 'expo-image-picker';
import mime from 'mime';
import { Platform } from 'react-native';
import { addNewPhoto } from 'src/store/slices/user.slice';

const AddImage = () => {
  const { uploadingPhoto } = useAppSelector((state) => state.userSlice);
  const [status, requestPermission] = ImagePicker.useCameraPermissions();
  const dispatch = useAppDispatch();
  const addPhoto = async () => {
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
      const newImages: PickedImage[] = [];
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

        const photos = newImages.map((image) => image.imageData);

        dispatch(addNewPhoto(photos));
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
