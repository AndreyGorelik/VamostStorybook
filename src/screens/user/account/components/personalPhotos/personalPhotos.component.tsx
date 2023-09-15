import useTheme from '@shared/hooks/useTheme.hook';
import { View } from 'react-native';

import { PhotoContainer } from '../photoContainer';

import { createStyles } from './personalPhotos.styles';

export default function PersonalPhotos() {
  const theme = useTheme();
  const styles = createStyles(theme);

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
