import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';

import PhotoInput from './photoInput.component';
import { PhotoInputProps } from './photoInput.types';

export default {
  title: 'PhotoInput',
  component: PhotoInput,
};

export const Filled: { args: PhotoInputProps } = {
  args: {
    image:
      'file:///Users/oadmin/Library/Developer/CoreSimulator/Devices/7CB28B37-A684-44C4-BC9B-5B222D4A59FE/data/Containers/Data/Application/2AD599B1-41B4-41D0-9487-F4F845F1EECB/Library/Caches/ExponentExperienceData/%2540zbsprod%252Fvamoose/ImagePicker/F3AF818E-E2A6-4479-A10A-DE205DA81955.jpg',
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
