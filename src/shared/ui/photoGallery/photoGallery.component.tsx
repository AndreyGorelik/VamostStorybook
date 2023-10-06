import useTheme from '@shared/hooks/useTheme.hook';
import { getImagePath } from '@shared/utils/getImagePath';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { Image, ImageBackground, TouchableOpacity, View } from 'react-native';

import Text from '../text/text.component';

import ModalGallery from './components/modalGallery/modalGallery.component';
import { createStyles } from './photoGallery.styles';
import { PhotoGalleryProps } from './photoGallery.types';

const MAX_IMAGES = 6;

function PhotoGallery({ images }: PhotoGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [openModalGallery, setOpenModalGallery] = useState(false);

  if (!images) return null;

  return (
    <>
      <View style={styles.wrapper}>
        {images.map((item, index, array) => {
          const isTheOnlyOneImage = index === 0 && array.length === 1;
          const isTheFirstImage = index === 0 && array.length > 1;
          const notTheFirstImage = index < MAX_IMAGES && index !== 0;
          const isLastImage = index === array.length - 1;

          if (isTheOnlyOneImage) {
            return (
              <Image
                key={item._id}
                source={{ uri: getImagePath(item) }}
                style={styles.isTheOnlyOneImage}
              />
            );
          }

          if (isTheFirstImage) {
            return (
              <Image
                key={item._id}
                source={{ uri: getImagePath(item) }}
                style={styles.isTheFirstImage}
              />
            );
          }

          if (notTheFirstImage && !isLastImage) {
            return (
              <Image
                key={item._id}
                source={{ uri: getImagePath(item) }}
                style={styles.notTheFirstImage}
              />
            );
          }

          if (isLastImage) {
            if (array.length > MAX_IMAGES) {
              return (
                <TouchableOpacity
                  key={item._id}
                  style={styles.isLastImage}
                  activeOpacity={0.8}
                  onPress={() => setOpenModalGallery(true)}
                >
                  <ImageBackground
                    imageStyle={styles.isLastImage}
                    source={{
                      uri: getImagePath(item),
                    }}
                    style={styles.flex}
                  >
                    <LinearGradient
                      colors={[theme.colors.gradientFinish, theme.colors.gradientFinish]}
                      style={styles.linearGradient}
                    >
                      <Text variant="h2" color={theme.colors.secondary}>
                        +{(array.length - MAX_IMAGES).toString()}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </TouchableOpacity>
              );
            } else {
              return (
                <Image
                  key={item._id}
                  source={{ uri: getImagePath(item) }}
                  style={styles.isLastImage}
                />
              );
            }
          }

          return null;
        })}
      </View>
      {openModalGallery && (
        <ModalGallery close={() => setOpenModalGallery(false)} images={images} />
      )}
    </>
  );
}

export default PhotoGallery;
