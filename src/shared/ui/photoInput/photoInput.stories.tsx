import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import PhotoInput from './photoInput.component';
import { FILE_MOCK } from './photoInput.data';
import { PhotoInputProps } from './photoInput.types';

export default {
  title: 'PhotoInput',
  component: PhotoInput,
};

export const Filled: { args: PhotoInputProps } = {
  args: {
    image: FILE_MOCK,
    onDelete: () => {
      return true;
    },
    pickImage: async () => {
      return;
    },
    id: 1,
  },
};

const Template = () => {
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

  return <PhotoInput image={image} pickImage={pickImage} onDelete={onDelete} id={1} />;
};

export const Default = Template.bind({});
