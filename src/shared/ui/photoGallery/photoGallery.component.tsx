import useTheme from '@shared/hooks/useTheme.hook';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import Text from '../text/text.component';

import ModalGallery from './components/modalGallery/modalGallery.component';
import { createStyles } from './photoGallery.styles';
import { PhotoGalleryProps } from './photoGallery.types';

const MAX_IMAGES = 6;

function PhotoGallery({ images }: PhotoGalleryProps) {
  const theme = useTheme();
  const styles = createStyles(theme);
  const reversedImages = [...images].reverse();
  const [openModalGallery, setOpenModalGallery] = useState(false);
  const [imageIdGallery, setImageIdGallery] = useState<null | number>(null);

  const openGallery = (id: string) => {
    const index = reversedImages.findIndex((item) => item._id === id);
    setImageIdGallery(index);
    setOpenModalGallery(true);
  };
  if (!images) return null;

  return (
    <>
      <View style={styles.wrapper}>
        {reversedImages.map((item, index, array) => {
          const isTheOnlyOneImage = index === 0 && array.length === 1;
          const isTheFirstImage = index === 0 && array.length > 1;
          const notTheFirstImage = index < MAX_IMAGES && index !== 0;
          const isLastImage = index === MAX_IMAGES;

          if (isTheOnlyOneImage) {
            return (
              <TouchableOpacity
                key={item._id}
                style={styles.isTheOnlyOneImage}
                onPress={() => openGallery(item._id)}
              >
                <Image
                  key={item._id}
                  source={{ uri: item.imagePath }}
                  style={styles.isTheOnlyOneImage}
                />
              </TouchableOpacity>
            );
          }

          if (isTheFirstImage) {
            return (
              <TouchableOpacity
                key={item._id}
                style={styles.isTheFirstImage}
                onPress={() => openGallery(item._id)}
              >
                <Image
                  key={item._id}
                  source={{ uri: item.imagePath }}
                  style={styles.isTheFirstImage}
                />
              </TouchableOpacity>
            );
          }

          if (notTheFirstImage && !isLastImage) {
            return (
              <TouchableOpacity
                key={item._id}
                style={styles.notTheFirstImage}
                onPress={() => openGallery(item._id)}
              >
                <Image
                  key={item._id}
                  source={{ uri: item.imagePath }}
                  style={styles.notTheFirstImage}
                />
              </TouchableOpacity>
            );
          }

          if (isLastImage) {
            if (array.length > MAX_IMAGES) {
              return (
                <TouchableOpacity
                  key={item._id}
                  style={styles.isLastImage}
                  activeOpacity={0.8}
                  onPress={() => openGallery(item._id)}
                >
                  <ImageBackground
                    imageStyle={styles.isLastImage}
                    source={{
                      uri: item.imagePath,
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
                <TouchableOpacity
                  key={item._id}
                  style={styles.isLastImage}
                  activeOpacity={0.8}
                  onPress={() => openGallery(item._id)}
                >
                  <Image
                    key={item._id}
                    source={{ uri: item.imagePath }}
                    style={styles.isLastImage}
                  />
                </TouchableOpacity>
              );
            }
          }

          return null;
        })}
      </View>
      {openModalGallery && (
        <ModalGallery
          close={() => setOpenModalGallery(false)}
          images={reversedImages}
          imageScaleId={imageIdGallery}
        />
      )}
    </>
  );
}

export default PhotoGallery;
